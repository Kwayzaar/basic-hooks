import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterContainer({ characters }) {

  const displayCharacters = () => characters.map(character => {
    return <CharacterCard 
      key={ character.id }
      character={ character }
    />
  })

  console.log(characters)

  return (
    <div>
      {displayCharacters()}
      {/* { characters ? displayCharacters() : null } */}
    </div>
  )
}

export default CharacterContainer;
