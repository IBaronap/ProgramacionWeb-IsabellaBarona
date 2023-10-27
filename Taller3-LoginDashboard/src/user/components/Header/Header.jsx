import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './Header.module.css'

export const Header = memo(function Header () {
  const items = [{
    id: 1,
    title: 'Asian',
    src: ''
  },
  {
    id: 2,
    title: 'American',
    src: ''
  },
  {
    id: 3,
    title: 'Italian',
    src: ''
  },
  {
    id: 4,
    title: 'Mexican',
    src: ''
  },
  {
    id: 5,
    title: 'Other',
    src: ''
  }]

  const navigate = useNavigate()

  return (
    <header className={styles.Header}>
      <h1>Logo</h1>
      <Menu menu={items} />
      <div className={styles.User}>
        <h3>Juanes</h3>
        <img src='./src/Assets/UserPic.jpeg' />
      </div>
      <Button onClick={() => navigate('/')} title='Logout' />
    </header>
  )
})

export function Menu ({ menu }) {
  const [hover, setHover] = useState(false)

  const toggleHover = () => setHover(true)

  const toggleState = () => setHover((prevState) => !prevState)

  const hoverStyle = {
    color: hover ? 'white' : 'black',
    backgroundColor: hover ? '#861629' : 'transparent',
    padding: '2vh',
    borderRadius: '5px',
    transition: 'all 0.5s',
    cursor: 'pointer'
  }

  return (
    <nav>
      <ul className={styles.Menu}>
        {
            menu.map((menu) => {
              return <p key={menu.id} onMouseLeave={toggleState} onMouseEnter={toggleHover} style={hoverStyle}>{menu.title}</p>
            })
        }
      </ul>
    </nav>
  )
}
