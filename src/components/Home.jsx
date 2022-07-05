import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => {


  return (
    <div className='home'>
        <div>
          <h1>It is a beautiful day, and you decide to make some soup.</h1>
          <h3>Your cupboards are empty, so you grab your trust notebook and set off to find ingredients.</h3>
        </div>
        <div>
          <Link to='/StoryPage'>
            <button>Click here to start your adventure</button>
          </Link>
          <Link to='/Credits'>
            <button>Credits</button>
          </Link>
        </div>

    </div>
  )
}

export default Home