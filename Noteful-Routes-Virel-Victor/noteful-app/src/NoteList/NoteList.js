import React from 'react';
import Note from '../Note/Note';
import {NotefulContext} from '../NotefulContext';
import {findNotesForFolder} from '../App/App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NoteList.css';

export default class NoteList extends React.Component {
     static contextType = NotefulContext;
     render(){
          let { notes } = this.context;
          let {folderId} = this.props.match.params;
          let notesForFolder = findNotesForFolder(notes, folderId);
          notes = notesForFolder;
          return (
               <section className='NoteList'>
                    <ul> {notes.map(note =>
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
                    <Link to="/add-note">
                    <button 
                    className='NoteList-Add-Note-Button' 
                    type='button'
                    
                    >
                    <FontAwesomeIcon icon='plus' />
                         Add Note
                    </button>
                    </Link>
               </section>
          )
     }
}
