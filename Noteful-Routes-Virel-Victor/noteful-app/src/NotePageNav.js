import React from 'react';

//import NotePageNav.css

export default function NotePageNav(props) {
     return (
          <div>
               {/* button to go back (history) */}
               <button className='NotePageNav-back-button' role='link'>
                   Back
               </button>
                <h3 className='NotePageNav-folder-name'>
                    {props.folder.name}
                </h3>
          </div>
     )
}