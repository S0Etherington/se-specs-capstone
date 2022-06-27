import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weapons = () => {

  const  [weaponMap, setWeaponMap] = useState([])

  useEffect(() => {
    getWeaponInfo()
  }, [])

  const getWeaponInfo = () => {
    axios.get('/weapons')
      .then(res => {
        setWeaponMap(res.data)
          .map((el, em, ar) => {

          })
      })
  }

  return (
    <div className='weapons'>
        <p>Weapon info here</p>
    </div>
  )
}

export default Weapons