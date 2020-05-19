import React from 'react';
import Note from './Note';
//import router components

//import NoteList.css

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
               {/* button to go to add-note (remember correct route) */}
               <button className='Add-Note-Button' type='button'>
                    Add Note
               </button>
          </section>
     )
}