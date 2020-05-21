import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NoteMainPage from '../NoteMainPage/NoteMainPage';
import NoteListNav from '../NoteListNav/NoteListNav';
import NoteList from '../NoteList/NoteList';
import NotePageNav from '../NotePageNav/NotePageNav';
import AddNote from '../AddForms/AddNote';
import AddFolder from '../AddForms/AddFolder';
import FormError from '../FormError'
import { NotefulContext } from '../NotefulContext'
//import {withRouter} from 'react-router'

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//find folder
export const findFolder = (folders = [], folderId) =>
  folders.find(folder => folder.id === folderId)

//find note
export const findNote = (notes = [], noteId) =>
  notes.find(note => note.id === noteId)

//find the notes for the folder
export const findNotesForFolder = (notes = [], folderId) => (
  (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
)

export default class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  // componentDidMount
  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });

  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
    console.log(this.props, 'Please')
  };
  addSetState = (data, callback) => {
    console.log(data)
    this.setState({ notes: [...this.state.notes, data]},callback)
  }
  addSetStateFolder = (data, callback) => {
    console.log(data)
    this.setState({ folders: [...this.state.folders, data]},callback)
  }

  // set up routes for nav
  navRoutes() {
    return (

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
        <FormError>
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-note'
          component={AddNote}
        />
        </FormError>
      </>


    )
  }

  // set up routes for main
  mainRoutes() {
    return (

      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={NoteList}
          />
        ))}
        <Route
          path='/note/:noteId'
          component={NoteMainPage}
        />
      </>


    )
  }

  render() {
    return (
      <NotefulContext.Provider value={{
        notes: this.state.notes,
        folders: this.state.folders,
        deleteNote: this.handleDeleteNote,
        addSetState: this.addSetState,
        addSetStateFolder: this.addSetStateFolder
      }}>
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
      </NotefulContext.Provider>
    );
  }

}

//export default withRouter(App)