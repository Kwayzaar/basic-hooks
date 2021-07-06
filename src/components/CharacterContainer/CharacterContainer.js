import React from 'react'
import './CharacterContainer.css'
import CharacterCard from '../CharacterCards/CharacterCard'
import Dropdown from '../Dropdown/Dropdown'
// import "tailwindcss/tailwind.css"

function CharacterContainer({ characters }) {

  const displayCharacters = () => characters.map(character => {
    return <CharacterCard 
      key={ character.id }
      character={ character }
    />
  })

  console.log(characters)

  return (
    <main>
      <Dropdown />
      <div class="card-container">
        {displayCharacters()}
        {/* { characters ? displayCharacters() : null } */}
      </div>
      
    </main>
  )
}

export default CharacterContainer;
