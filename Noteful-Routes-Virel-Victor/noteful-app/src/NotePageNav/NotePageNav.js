import React from 'react';
import {NotefulContext} from '../NotefulContext';
import {findFolder, findNote} from '../App/App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NotePageNav.css';

export default class NotePageNav extends React.Component {
     static contextType = NotefulContext;
     render(){
          let {folders, notes} = this.context;
          const  {noteId}  = this.props.match.params;
          console.log(this.props);
          console.log(noteId);
          const note = findNote(notes, noteId) || {};
          let folder = findFolder(folders, note.folderId);
          return (
               <div>
                    {/* button to go back (history) */}
                    <button 
                    tag='button'
                    className='NotePageNav-back-button' 
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    >
                         <FontAwesomeIcon icon='chevron-left' />
                        Back
                    </button>
                    {folder && (
                      <h3 className='NotePageNav-folder-name'>
                         {folder.name}
                     </h3>   
                    )}
               </div>
          )
     }
}

NotePageNav.defaultProps = {
     history: {
          goBack: () => {}
     }
}