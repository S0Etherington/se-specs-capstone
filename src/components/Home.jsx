import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => {


  return (
    <div className='storyBox'>
        <div id='homeTextBox'>
          <h1 className='homeText storyText'>It is a beautiful day, and you are preparing for a party.</h1>
          <h3 className='homeText'>Your cupboards are empty, so you grab your bag and set of in search of ingredients for your famous soup.</h3>
        </div>
        <div id='homeButtonsBox'>
          <Link to='/StoryPage'>
            <button className='button homeButton' >Click here to start your adventure</button>
          </Link>
          <Link to='/Credits'>
            <button className='button homeButton' >Credits</button>
          </Link>
        </div>

    </div>
  )
}

export default Home