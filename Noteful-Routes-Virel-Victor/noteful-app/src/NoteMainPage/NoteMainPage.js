import React from 'react';
import Note from '../Note/Note';

//import NoteMainPage.css

export default function NoteMainPage(props) {
     return (
          <section className='NoteMainPage'>
          <Note
               id={note.id}
               name={note.name}
               modified={note.modified}
          />
          <div className='NoteMainPage-content'>
               {props.note.content}
          </div>
          </section>
     )
}