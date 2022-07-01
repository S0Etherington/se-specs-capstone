import React from 'react'
import Popup from 'reactjs-popup'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Codex from './Codex'

const Navigation = () => {
  

  return (
    <div className='nav'>
      <div>
        <Link to='/home'>
          <button>Return Home</button>
        </Link>
      </div>
        <Popup trigger={<button clasName='button'> Codex </button>} modal>
          <span> {<Codex/>} </span>
        </Popup>
    </div>
  )
}

export default Navigation