import React from 'react';
import Note from '../Note/Note';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NoteList.css';

export default function NoteList(props) {
     return (
          <section className='NoteList'>
               <ul> {props.notes.map(note =>
                    <li key={note.id}>
                         <Note
                         id={note.id}
                         name={note.name}
                         modified={note.modified}
                         />
                    </li>
                    )}
               </ul>
               {/* button with link to go to add-note (remember correct route is '/add-note'*/}
               <button 
               className='NoteList-Add-Note-Button' 
               type='button'
               >
               <FontAwesomeIcon icon='plus' />
                    Add Note
               </button>
          </section>
     )
}

NoteList.defaultProps = {
     notes: []
}