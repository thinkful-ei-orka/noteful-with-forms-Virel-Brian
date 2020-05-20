import React from 'react';
import { Link } from 'react-router-dom';
import {NotefulContext} from '../NotefulContext';
import './Note.css';

import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Note extends React.Component {
     static contextType = NotefulContext;
     handleClickDelete = e => {
          e.preventDefault()
          const noteId = this.props.id
      
          fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
               .then(res=> res.json())
               .then(()=>{
                    this.context.deleteNote(noteId)
                    console.log(this.props,'Yahoo')
                    //this.props.history.push('/')
                    //this.props.onDeleteNote(noteId)
               })
     }
     
     render(){
          let date = new Date(this.props.modified);
          return (
               <div className='Note'>
                    <h2 className='Note-title'>
                         <Link to={`/note/${this.props.id}`}>
                         {this.props.name}
                         </Link>
                    </h2>
                    <button 
                    className='Note-delete' 
                    type='button' 
                    onClick={this.handleClickDelete}
                    >
                    <FontAwesomeIcon icon='trash-alt' />
                    {' '}
                         Remove
                    </button>
                    <div className='Note-dates'>
                         <div className='Note-dates-modified'>
                              Modified
                              {' '}
                              <span className='Date'>
                                   {format(date, 'dd mm yyyy')}
                              </span>
                         </div>
                    </div>
               </div>
          )
     }
}