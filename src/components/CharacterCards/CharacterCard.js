import React from 'react'
// import "tailwindcss/tailwind.css"

function CharacterCard({ character }) {

  return (
    <div class="character-card">
      <h2>{ character.name }</h2>
      <img src={ character.image} alt={ character.name } />
    </div>
  )
}

export default CharacterCard
