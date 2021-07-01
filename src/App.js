import React, { useState, useEffect } from 'react'
import './App.css';
import CharacterContainer from './components/CharacterContainer';
import Counter from "./Counter"
import Data from "./Data"
// import Combo from "./Combo"

const baseURL = "https://rickandmortyapi.com/api/character"

function App() {

  const [characters,setCharacter] = useState([])
    
  
  useEffect(() => {
    // const fetchCharacter = () => {
        fetch(baseURL)
        .then(resp => resp.json())
        // .then(console.log)
        .then(characters => setCharacter(characters))
        // .then(console.log)
    // }
    // fetchCharacter()
    // console.log('use effect ran')
  }, [characters])

  return (
    <div className="App">
      {/* <Counter />
      <Data /> */}
      <CharacterContainer 
            // value={characters.results}
            characters={characters.results} 
          />
    </div>
  );
}

export default App;
