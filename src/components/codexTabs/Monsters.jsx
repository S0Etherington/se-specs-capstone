import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodexFooter from '../CodexFooter'

const Monsters = () => {

  const [index, setIndex] = useState(0)
  const [codexData, setCodexData] = useState([])

  useEffect(() => {
    getMonsterInfo()
  }, [])

  const getMonsterInfo = () => {
    axios.get('/monsters')
      .then(res => {
        setCodexData(res.data)
        console.log(res.data)
      })
  }

  return (
    <div className='monsters'>
      <div>
        {codexData.length === 0 ?
          <p className='loading'> loading </p> : 
          <p>Monster Name: {codexData[index].monster_name}</p>
        }
      </div>
      <div>
        {codexData.length === 0 ?
          <p className='loading'> loading </p> : 
          <p>Hit Points: {codexData[index].hit_points}</p>
        }
      </div>
      <div>
        {codexData.length === 0 ?
          <p className='loading'> loading </p> :
          <p>Weakness: {codexData[index].damage_name}</p>
        }
      </div>

      <footer><CodexFooter index={index} setIndex={setIndex} codexData={codexData} setCodexData={setCodexData}/></footer>

    </div>
  )
}

export default Monsters