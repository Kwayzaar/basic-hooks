import React, { useState, useEffect } from 'react'
import './App.css';
import CharacterContainer from './components/CharacterContainer';
import Counter from "./Counter"
import Data from "./Data"
// import Combo from "./Combo"

const baseURL = "https://rickandmortyapi.com/api/character"

function App() {

  const [characters,setCharacters] = useState([])
    
  const getCharacters = () => {
    fetch(baseURL)
    .then(response => response.json())
    .then(characters => setCharacters(characters.results))
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="App">
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
