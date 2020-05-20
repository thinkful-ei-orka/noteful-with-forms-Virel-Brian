import React from 'react';
import Note from '../Note/Note';
import {findNote} from '../App/App'
import {NotefulContext} from '../NotefulContext'

import './NoteMainPage.css'

export default class NoteMainPage extends React.Component{
     static contextType = NotefulContext;
     handleDeleteNote = noteId => {
          this.props.history.push(`/`)
        }

     render(){
          let {notes} = this.context;
          const { noteId } = this.props.match.params;
          const note = findNote(notes, noteId);
          console.log('Testing',note);
          return (
               <section className='NoteMainPage'>
               <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
               />
               <div className='NoteMainPage-content'>
                    {this.props.note.content.split(/\n \r|\n/).map((para, i) =>
                    <p key={i}>{para}</p>
                    )}
               </div>
               </section>
          )
     }
}

NoteMainPage.defaultProps = {
     note: {
          content: '',
     }
}