import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodexFooter from '../CodexFooter'

const Weapons = () => {

  const [index, setIndex] = useState(0)
  const  [codexData, setCodexData] = useState([])

  useEffect(() => {
    getWeaponInfo()
  }, [])

  const getWeaponInfo = () => {
    axios.get('/weapons')
      .then(res => {
        console.log(res.data)
        setCodexData(res.data)
      })
  }

  return (
    <div className='weapons'>
      <div>
        {codexData.length === 0 ?
          <p className='loading'> loading </p> : 
          <p>Weapon Name: {codexData[index].weapon_name}</p>
        }
      </div>
      <div>
        {codexData.length === 0 ?
          <p className='loading'> loading </p> : 
          <p>Damage: {codexData[index].damage}</p>
        }
      </div>

      <footer><CodexFooter index={index} setIndex={setIndex} codexData={codexData} setCodexData={setCodexData}/></footer>

    </div>
  )
}

export default Weapons