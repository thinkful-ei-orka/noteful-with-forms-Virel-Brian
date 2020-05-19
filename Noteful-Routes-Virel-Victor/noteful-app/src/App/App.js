import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NoteMainPage from '../NoteMainPage/NoteMainPage';
import NoteListNav from '../NoteListNav/NoteListNav';
import NoteList from '../NoteList/NoteList';
import NotePageNav from '../NotePageNav/NotePageNav';
import dummyStore from '../dummy-store';

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  // componentDidMount
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }

  // set up routes for nav
  navRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
      {['/', 'folder/:folderId'].map(path => (
        <Route
          exact
          path={path}
          key={path}
          render={routeProps => (
            <NoteListNav
              folders={folders}
              notes={notes}
              {...routeProps}
            />
          )}
        />
        ))}
        <Route 
        path='/note/:noteId'
        render= {routeProps => {
          const { noteId } = routeProps.match.params;
          const note = findNote(notes, noteId) || {};
          const folder = findFolder(folders, note.folderId)
          return <NotePageNav
          { ...routeProps }
          folder = { folder }
          />
        }
      }
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
    )
  }

  // set up routes for main
  mainRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={ path }
            path={ path }
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = findNotesForFolder(notes, folderId);
              return (
                <NoteList
                  {...routeProps}
                  notes = { notesForFolder }
                />
              )
            }}
          />
        ))}
        <Route 
        path= '/note/:noteId'
        render= {routeProps => {
          const { noteId } = routeProps.match.params;
          const note = findNote(notes, noteId);
          return <NoteMainPage 
          { ...routeProps }
          note = { note }
          />
        }}
        />
      </>
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