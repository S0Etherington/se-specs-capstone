import React, { useState } from 'react'

const CodexFooter = (props) => {
  const {index, setIndex} = props
  const {codexData, setCodexData} = props

  const previous = () => {
    if(index === 0){
      setIndex(codexData.length - 1)
    }
    else {
      setIndex(index - 1)
    }
  }

  const next = () => {
    if(index === codexData.length - 1){
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }

  return (
    <div id='codexNavButtons'>
        <button className='button navButton codexButton' onClick={() => previous()}>Previous</button>
        <button className='button navButton codexButton' onClick={() => next()}>Next</button>
    </div>
  )
}

export default CodexFooter