import React from 'react';
import {NotefulContext} from '../NotefulContext';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NoteListNav.css';

// filter function to get note count
const noteCounter = (notes= [], folderId) =>
notes.filter(note => note.folderId === folderId).length;


export default class NoteListNav extends React.Component {
     static contextType = NotefulContext;
     render(){
          const {folders, notes} = this.context;
          return (
               <div className='NoteListNav'>
                    <ul className='NoteListNav-list'>
                         {folders.map(folder => 
                         <li key={folder.id}>
                              <NavLink
                              to={`/folder/${folder.id}`}
                              className='NoteListNav-folder-link'
                              >
     
                              <span className='NoteListNav-number-notes'>
                                   {noteCounter(notes, folder.id)}
                              </span>
                              {folder.name}                         
                              </NavLink>
                         </li>
                         )}
                    </ul>
                    {/* button to go to add-folder (remember correct route) */}
                    <Link to="/add-folder">
                    <button 
                    className='NoteListNav-Add-Folder-Button'
                    >
                    <FontAwesomeIcon icon='plus' />
                         Add Folder
                    </button>
                    </Link>
               </div>
          )
     }
}

NoteListNav.defaultProps = {
     folders: []
}