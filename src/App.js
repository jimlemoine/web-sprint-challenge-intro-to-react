import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

import Characters from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
    .then(resp => {
      // console.log(resp.data);
      setCharacters(resp.data);
    })
    .catch(err => {
      console.error(err);
    })
}, []);

  return (
    <div className="App">
      <h1 className="Header">REACT WARS ></h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
