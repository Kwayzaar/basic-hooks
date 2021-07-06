import React, { useState } from 'react'

function Dropdown() {

  const [open, setOpen] = useState(false);
  const [selection, setSeletction] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {

  }

  return (
    <div className="dd-wrapper">
      <div 
        tabIndex={0} 
        className="dd-header" 
        role="button" 
        onKeyPress={() => toggle(!open)} 
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold">{}</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
