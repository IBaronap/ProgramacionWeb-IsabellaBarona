import React, { memo, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Button } from '../Button/Button'
import styles from './Header.module.css'

export const Header = memo(function Header () {
  const items = [
    {
      id: 1,
      title: 'All'
    },
    {
      id: 2,
      title: 'Asian'
    },
    {
      id: 3,
      title: 'American'
    },
    {
      id: 4,
      title: 'Italian'
    },
    {
      id: 5,
      title: 'Mexican'
    },
    {
      id: 6,
      title: 'Other'
    }]

  const navigate = useNavigate()

  return (
    <header className={styles.Header}>
      <img
        className={styles.Logo}
        src='./src/Assets/LogoTradi.svg'
        onClick={() => navigate('/Dashboard')}
      />
      <Menu items={items} />
      <div className={styles.User}>
        <h3>Juanes</h3>
        <img src='./src/Assets/UserPic.png' />
      </div>
      <Button onClick={() => navigate('/')} title='Logout' />
    </header>
  )
})

export function Menu ({ items }) {
  return (
    <nav>
      <ul className={styles.Menu}>
        {
            items.map((item) => {
              return <Dropdown key={item.id} item={item} />
            })
        }
      </ul>
    </nav>
  )
}

function Dropdown ({ item }) {
  const [hover, setHover] = useState(false)

  const toggleHover = () => setHover(true)

  const toggleState = () => setHover((prevState) => !prevState)

  const {
    selectedCategory,
    setSelectedCategory
  } = useContext(UserContext)

  const handleCategoryClick = () => {
    setSelectedCategory(item.title)
  }

  const hoverStyle = {
    color: selectedCategory === item.title ? 'white' : hover ? 'white' : 'black',
    backgroundColor: selectedCategory === item.title ? '#861629' : hover ? '#FF2828' : 'transparent',
    padding: '2vh',
    borderRadius: '5px',
    transition: 'all 0.25s',
    cursor: 'pointer'

  }

  return (
    <div key={item.id} onMouseLeave={toggleState}>
      <p onClick={handleCategoryClick} onMouseEnter={toggleHover} style={hoverStyle}>{item.title}</p>
    </div>
  )
}
