import React from "react";
import { Route, Link } from "react-router-dom";
import Note from "./Note/Note";
import dummyStore from "./dummy-store";
import PrimaryNav from "./PrimaryNav/PrimaryNav";
import "./App.css";

class App extends React.Component {
  state = { dummyStore };

  render() {
    let store = this.state.dummyStore;
    return (
      <div className="App">
        <header className="Header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <div className="FlexContainer">
          <Route
            exact
            path="/"
            render={props => (
              <nav className="sidebar">
                {store.folders.map(folder => (
                  <PrimaryNav folderId={folder.id} name={folder.name} />
                ))}
              </nav>
            )}
          ></Route>
          <Route
            exact
            path="/folder/:folderID"
            render={props => (
              <nav className="sidebar">
                {store.folders.map(folder => (
                  <PrimaryNav name={folder.name} />
                ))}
              </nav>
            )}
          ></Route>
          <main className="Main">
            <Route
              path="/"
              render={props =>
                store.notes.map(note => (
                  <Note name={note.name} modified={note.modified} />
                ))
              }
            ></Route>
            <Route
              path="/folder/:folderId"
              render={props =>
                store.notes
                  .filter(note => note.folderID === props.match.params.Id)
                  .map(note => (
                    <Note name={note.name} modified={note.modified} />
                  ))
              }
            ></Route>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
