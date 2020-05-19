import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Note(props) {

     const date = new Date(props.modified)
     return (
          <div className='Note'>
               <h2 className='Note-title'>
                    <Link to={`/note/${props.id}`}>
                    {props.name}
                    </Link>
               </h2>
               <button 
               className='Note-delete' 
               type='button'
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