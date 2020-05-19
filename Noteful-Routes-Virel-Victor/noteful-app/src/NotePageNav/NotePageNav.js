import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NotePageNav.css';

export default function NotePageNav(props) {
     return (
          <div>
               {/* button to go back (history) */}
               <button 
               tag='button'
               className='NotePageNav-back-button' 
               role='link'
               onClick={() => props.history.goBack()}
               >
                    <FontAwesomeIcon icon='chevron-left' />
                   Back
               </button>
               {props.folder && (
                 <h3 className='NotePageNav-folder-name'>
                    {props.folder.name}
                </h3>   
               )}
          </div>
     )
}

NotePageNav.defaultProps = {
     history: {
          goBack: () => {}
     }
}