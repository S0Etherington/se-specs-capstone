import React from 'react'
import Popup from 'reactjs-popup'
import { Link, Routes, Route } from 'react-router-dom'
import Codex from './Codex'

const Navigation = () => {
  

  return (
    <div className='nav'>
      <div>
        <Link to='/'>
          <button className='navButton'>Return Home</button>
        </Link>
      </div>
        <Popup trigger={<button className='navButton'> Codex </button>} modal>
          <span> {<Codex/>} </span>
        </Popup>
    </div>
  )
}

export default Navigation