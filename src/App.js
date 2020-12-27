import './App.css';

import React, { Component } from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <h1>Jotto</h1>
       <Congrats success={true} />
       <GuessedWords guessedWords={[
         { guessedWord: 'fleeb', letterMatchCount: 3 }
       ]} />
      </div>
    );
  }
}

export default App;
