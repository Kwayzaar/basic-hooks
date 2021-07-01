import React, { useState, useEffect } from 'react'
import CharacterContainer from './components/CharacterContainer'

const baseURL = "https://rickandmortyapi.com/api/character"
// const imgURL = "https://api.taylor.rest/image"

export default function Data() {
    const [characters,setCharacter] = useState()
    // const [image, setImage] = useState("")
    
    const fetchCharacter = () => {
        fetch(baseURL)
        .then(resp => resp.json())
        .then(characters => setCharacter(characters))
        // .then(console.log)
    }

    // const fetchImage = () => {
    //     fetch(imgURL)
    //     .then(resp => resp.json())
    //     .then(quote => setImage(image.url))
    // }

    useEffect(() => {
      console.log('use effect ran')
      fetchCharacter()
      // fetchImage()
    }, [])

    return (
        <div>
          <CharacterContainer characters={characters} />
        </div>
    )
}
