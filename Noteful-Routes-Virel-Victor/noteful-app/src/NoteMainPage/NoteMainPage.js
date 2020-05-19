import React from 'react';
import Note from '../Note/Note';

import './NoteMainPage.css'

export default function NoteMainPage(props) {
     return (
          <section className='NoteMainPage'>
          <Note
               id={props.note.id}
               name={props.note.name}
               modified={props.note.modified}
          />
          <div className='NoteMainPage-content'>
               {props.note.content.split(/\n \r|\n/).map((para, i) =>
               <p key={i}>{para}</p>
               )}
          </div>
          </section>
     )
}

NoteMainPage.defaultProps = {
     note: {
          content: '',
     }
}