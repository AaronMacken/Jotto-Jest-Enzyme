import './App.css';
import React, { Component } from 'react';

import Input from './Input';

import hookActions from './actions/hookActions';

/**
 * Reducer to update state, called automatically by dispatch
 * state {object} - existing state
 * action {object} - contains `type` and `payload` properties for the state update
 * ex { type: 'setSecretWord', payload: 'party' }
 * @return {object} - new state
 */
function reducer(state, action) {
  switch(action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };

    default: 
      throw new Error(`Invalid action type ${action.type}`);
  }
}

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App (){
  const [state, dispatch] = React.useReducer(
    reducer, 
    { setSecretWord: null }
  );

  const setSecretWord = secretWord => dispatch({type: 'setSecretWord', payload: secretWord});

  React.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord)
    }, []
  );



  return (
    <div className="appContainer">
      <h1>Jotto</h1>

      <Input secretWord={state.secretWord} />



      
      {/* <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'fleeb', letterMatchCount: 3 }
      ]} /> */}
    </div>
  );
}

export default App;
