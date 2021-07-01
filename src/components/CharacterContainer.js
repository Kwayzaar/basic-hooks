import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterContainer({ characters }) {

  const displayCharacters = () => characters.map(character => {
    return <CharacterCard 
      key={ character.id }
      character={ character }
    />
  })
  
  return (
    <div>
      { displayCharacters() }
    </div>
  )
}

export default CharacterContainer;
