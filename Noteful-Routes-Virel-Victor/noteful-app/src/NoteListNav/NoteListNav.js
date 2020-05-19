import React from 'react';
//import router components

//import NoteListNav.css

// filter function to get note count

export default function NoteListNav(props) {
     return (
          <div className='NoteListNav'>
               <ul className='NoteListNav-list'>
                    {props.folders.map(folder => 
                    <li key={folder.id}>
                         <Link>
                         {folder.name}
                         <span className='NoteListNav-number-notes'>
                              
                         </span>
                         </Link>
                         
                    </li>
                    )}
               </ul>
               {/* button to go to add-folder (remember correct route) */}
               <button className='Add-Folder-Button'>
                         Add Folder
               </button>
          </div>
     )
}