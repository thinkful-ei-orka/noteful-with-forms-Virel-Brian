import React from 'react';
//import router components
import './App.css';
import NoteMainPage from '../NoteMainPage/NoteMainPage';
import NoteListNav from '../NoteListNav/NoteListNav';
import NoteList from '../NoteList/NoteList';
import NotePageNav from '../NotePageNav/NotePageNav';
import dummyStore from '../dummy-store';

import './App.css'

//find folder
const findFolder = (folders= [], folderId) =>
  folders.find(folder => folder.id === folderId)

//find note
const findNote = (notes= [], noteId) =>
  notes.find(note => note.id === noteId)

//find the notes for the folder
const findNotesForFolder = (notes= [], folderId) => (
  (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
)

class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  // componentDidMount

  // set up routes for nav

  // set up routes for main


  render() {
    return (
    <div className="App">
      <nav className='App-nav'>
      {/* routes for nav */}
      </nav>
      <header className="App-header">
        <Link to='/'>Noteful</Link>
      </header>
      <main className='App-main'>
      {/* routes for main */}
      </main>
    </div>
  );
  }
}

export default App;
