import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NoteMainPage from '../NoteMainPage/NoteMainPage';
import NoteListNav from '../NoteListNav/NoteListNav';
import NoteList from '../NoteList/NoteList';
import NotePageNav from '../NotePageNav/NotePageNav';
import dummyStore from '../dummy-store';
import {NotefulContext} from '../NotefulContext'

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//find folder
export const findFolder = (folders= [], folderId) =>
  folders.find(folder => folder.id === folderId)

//find note
export const findNote = (notes= [], noteId) =>
  notes.find(note => note.id === noteId)

//find the notes for the folder
export const findNotesForFolder = (notes= [], folderId) => (
  (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
)

export default class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  // componentDidMount
  componentDidMount() {
    //setTimeout(() => this.setState(dummyStore), 600);
    fetch('http://localhost:9090/db')
      .then(res=> res.json())
      .then(data=> this.setState({folders:data.folders, notes:data.notes}))
  }

  handleDeleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
};
    // fetch('http://localhost:9090/notes/' + noteId,{
    //   method: 'DELETE',
    //   headers: { 'content-type': 'application/json'}
    // })
    // fetch('http://localhost:9090/db')
    //   .then(res=> res.json())
    //   .then(data=> this.setState({folders:data.folders, notes:data.notes}))

  
  // set up routes for nav
  navRoutes() {
    return (
      <NotefulContext.Provider value={{
        notes: this.state.notes,
        folders: this.state.folders
    }}>
        <>
      {['/', 'folder/:folderId'].map(path => (
        <Route
          exact
          path={path}
          key={path}
          component={NoteListNav}
        />
        ))}
        <Route 
        path='/note/:noteId'
        component={NotePageNav}
        />
        <Route
        path='/add-folder'
        component={ NotePageNav }
        />
        <Route
        path='/add-note'
        component={ NotePageNav }
        />
      </>
      </NotefulContext.Provider>
      
    )
  }

  // set up routes for main
  mainRoutes() {
    return (
      <NotefulContext.Provider value={{
        notes: this.state.notes,
        deleteNote: this.handleDeleteNote,

    }}>
        <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={ path }
            path={ path }
            component={NoteList}
          />
        ))}
        <Route 
        path= '/note/:noteId'
        component={NoteMainPage}
        />
      </>
    </NotefulContext.Provider>
      
    )
  }

  render() {
    return (
    <div className='App'>
      <nav className='App-nav'>
      {this.navRoutes()}
      </nav>
      <header className='App-header'>
        <h1>
        <Link to='/'>Noteful</Link>{' '}
        <FontAwesomeIcon icon='check-double' />
        </h1>
      </header>
      <main className='App-main'>
      {this.mainRoutes()}
      </main>
    </div>
  );
  }
}