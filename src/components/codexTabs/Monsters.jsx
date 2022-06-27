import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Monsters = () => {

  const [monsterMap, setMonsterMap] = useState([])

  useEffect(() => {
    getMonsterInfo()
  }, [])

  const getMonsterInfo = () => {
    axios.get('/monsters')
      .then(res => {
        setMonsterMap(res.data)
          .map((el, em, ar) => {
            
          })
      })
  }

  return (
    <div className='monsters'>
        <p>Monster info here</p>
    </div>
  )
}

export default Monsters