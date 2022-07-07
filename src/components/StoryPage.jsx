import React, { useState, useEffect } from 'react'
import story from '../story'

const StoryPage = () => {
    const [ sceneText, setSceneText ]  = useState(story.frontyardStart.text)
    const [ subText, setSubText ] = useState(story.frontyardStart.subText)
    const [ background, setBackground ] = useState('')
    const [ optionOne, setOptionOne ] = useState(story.frontyardStart.options.frontyardRock)
    const [ optionTwo, setOptionTwo ] = useState(story.frontyardStart.options.frontyardPath)
    const [ optionThree, setOptionThree ] = useState(story.frontyardStart.options.frontyardBush)
    const [ optionsArray, setOptionsArray ] = useState(Object.keys(story.frontyardStart.options))

    const findKeys = (selected) => {
        const selectedKey = optionsArray[selected]

        console.log(optionsArray)
        setSceneText(story[selectedKey].text)
        setSubText(story[selectedKey].subText)

        const selectedArray = Object.values(story[selectedKey].options)
        setOptionOne(selectedArray[0])
        setOptionTwo(selectedArray[1])
        setOptionThree(selectedArray[2])

        setOptionsArray(Object.keys(story[selectedKey].options))

        console.log(selectedKey)
        console.log(sceneText)
        console.log(subText)
        console.log(optionOne)
        console.log(optionTwo)
        console.log(optionThree)
        console.log(optionsArray)
    }

    return (
      <div className='storyBox'>
        <div id='storyTextHolder'>
          <h1 className='storyText homeText'> {sceneText} </h1>
          <h3 className='homeText' > {subText} </h3>
        </div>
        <div id='storyButtonHolder'>
          <button className='button storyButton' onClick={() => findKeys(0)}> {optionOne} </button> 
          <button className='button storyButton' onClick={() => findKeys(1)}> {optionTwo} </button>
          <button className='button storyButton' onClick={() => findKeys(2)}> {optionThree} </button>
        </div>
      </div>
    )
}

export default StoryPage