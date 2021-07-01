import React, { useState, useEffect } from 'react'

const baseURL = "https://rickandmortyapi.com/api"
// const imgURL = "https://api.taylor.rest/image"

export default function Data() {
    const [characters,setCharacter] = useState("")
    // const [image, setImage] = useState("")
    
    const fetchCharacter = () => {
        fetch(baseURL)
        .then(resp => resp.json())
        .then(console.log)
        .then(characters => setCharacter(characters))
    }

    // const fetchImage = () => {
    //     fetch(imgURL)
    //     .then(resp => resp.json())
    //     .then(quote => setImage(image.url))
    // }

    useEffect(() => {
      fetchCharacter()
      // fetchImage()
    }, [])

    return (
        <div>
            <h3>{ characters }</h3>
            <img alt="taylor" />
        </div>
    )
}
