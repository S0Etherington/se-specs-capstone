import React, {useState} from 'react'
import Monsters from './codexTabs/Monsters'
import Weapons from './codexTabs/Weapons'
import CodexFooter from './CodexFooter'

const Codex = () => {

  const [activeTab, setActiveTab] = useState('monsters')

  const handleTabMonsters = () => {
    setActiveTab('monsters')
  }

  const handleTabWeapons = () => {
    setActiveTab('weapons')
  }

    return (
      <div className='codexTabs'>
        <div>
          <ul className='tabNav'>
              <li className={activeTab === 'monsters' ? 'active' : ''} onClick={handleTabMonsters}>Monsters</li>
              <li className={activeTab === 'weapons' ? 'active' : ''} onClick={handleTabWeapons}>Weapons</li>
          </ul>
          <div className='outlet'>
            {activeTab === 'monsters' ? <Monsters/> : <Weapons />}
          </div>
        </div>
      </div>
    )
}

export default Codex