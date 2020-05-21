import React from 'react';
import Note from '../Note/Note';
import {findNote} from '../App/App'
import {NotefulContext} from '../NotefulContext'

import './NoteMainPage.css'

// function handleDeleteNote (noteId) {
//      console.log(noteId);
//      this.props.history.push(`/`)
//    }
export default class NoteMainPage extends React.Component{
     static defaultProps = {
          match: {
            params: {}
          }
        }
     static contextType = NotefulContext;
     
     handleDeleteNote = noteId => {
          
          this.props.history.push(`/`)
        }

     render(){
          // const handleClickDelete = e => {
          //      e.preventDefault()
          //      const noteId = this.props.id
          //      //console.log
          //      fetch(`http://localhost:9090/notes/${noteId}`, {
          //        method: 'DELETE',
          //        headers: {
          //          'content-type': 'application/json'
          //        },
          //      })
          //           .then(res=> res.json())
          //           .then(()=>{
          //                this.context.deleteNote(noteId)
          //                console.log(this.props,'Yahoo')
                         
          //           })
          // }
          
          let {notes=[]} = this.context;
          console.log(notes);
          const { noteId } = this.props.match.params;
          console.log(this.props);
          console.log(noteId);
          const note = findNote(notes, noteId) || { content: '' };
          console.log('Testing',note);
          console.log(this.handleDeleteNote)
          return (
               <section className='NoteMainPage'>
               <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    Deletethis={this.handleDeleteNote}
               />
               
               <div className='NoteMainPage-content'>
                    {note.content.split(/\n \r|\n/).map((para, i) =>
                    <p key={i}>{para}</p>
                    )}
               </div>
               </section>
          )
     }
}
//<button onClick={handleClickDelete}> Remove </button>

NoteMainPage.defaultProps = {
     note: {
          content: '',
     }
}