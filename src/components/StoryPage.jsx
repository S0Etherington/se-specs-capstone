import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import story from '../story'

const StoryPage = () => {
    const  [ sceneText, setSceneText ]  = useState(story.frontyardStart.text)
    const [ background, setBackground ] = useState('')
    const [ optionOne, setOptionOne ] = useState(story.frontyardStart.options.frontyardRock)
    const [ optionTwo, setOptionTwo ] = useState(story.frontyardStart.options.frontyardPath)
    const [ optionThree, setOptionThree ] = useState(story.frontyardStart.options.frontyardHelp)
    const [ optionsArray, setOptionsArray ] = useState(Object.keys(story.frontyardStart.options))

    const findKeys = (selected) => {
        const selectedKey = optionsArray[selected]
        console.log(optionsArray)
        console.log(selectedKey)
        setSceneText(story[selectedKey].text)
        const beans = Object.values(story[selectedKey].options)
        setOptionOne(beans[0])
        setOptionTwo(beans[1])
        setOptionThree(beans[2])
    }

    return (
      <div className='storyPage'>
        <p> {sceneText} </p>
        <button onClick={() => findKeys(0)}> {optionOne} </button> 
        <button onClick={() => findKeys(1)}> {optionTwo} </button>
        <button onClick={() => findKeys(2)}> {optionThree} </button>

      </div>
    )
}

export default StoryPage