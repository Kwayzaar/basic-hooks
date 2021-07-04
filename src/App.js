import React, { useState, useEffect } from 'react'
import './App.css';
import CharacterContainer from './components/CharacterContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer'
// import "tailwindcss/tailwind.css"
// import Counter from "./Counter"
// import Data from "./Data"
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
      <Header />
      <CharacterContainer characters={characters} />
      <Footer />
    </div>
  );
}

export default App;
