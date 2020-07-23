import React, { Fragment } from 'react';
import './App.css';
import loadIcon from './Icons/Loader';
import Content from "./Layout/Content";


loadIcon();
function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img
            src="https://i.pinimg.com/originals/d7/c0/8b/d7c08ba221d859444203bf72e969a95a.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <body>
          <background className="Home">
            <Content />
          </background>
        </body>
      </div>
    </Fragment>
  );
}

export default App;
