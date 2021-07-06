import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import "tailwindcss/tailwind.css"

export default function Header() {
  return (
    <Router>
      <div className="header-wrap">
        <header class="header">
          <nav>
            <ul class="header-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/characters">Characters</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </Router>
  )
}
