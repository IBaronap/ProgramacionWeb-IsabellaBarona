import React, { useState } from 'react'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'

export function Menu ({ menu }) {
  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  }

  return (
    <nav style={menuStyles}>
      <ul style={menuStyles}>
        {
            menu.map((item) => {
              return <Dropdown key={item.id} item={item} />
            })
        }
      </ul>

      <Button type='main' title='Book appointment' />
    </nav>
  )
}

function Dropdown ({ item }) {
  const [showList, setShowList] = useState(false)
  const { id, text, options, path } = item

  const toggleShowList = () => setShowList(true)

  const toggleState = () => setShowList((prevState) => !prevState)

  const getIsCurrentPage = ({ isActive }) => {
    return isActive ? 'is-current-page' : ''
  }

  const btnClassName = showList ? 'is-hover' : ''

  const hoverStyle = {
    fontWeight: '500',
    textDecoration: 'inherit',
    margin: '0 1vh',
    padding: '2vh',
    borderRadius: '10px'
  }

  return (
    <li 
      key={id} 
      onMouseLeave={toggleState}
    >
      <NavLink to={path}
                className={getIsCurrentPage}
      >
        <a style={hoverStyle} className={btnClassName} onMouseEnter={toggleShowList}>
          {text}
        </a>
      </NavLink>
      {
        showList ? <Dropdownlist options={options} /> : null
      }
    </li>
  )
}

function Dropdownlist ({ options }) {
  const liStyle = {
    listStyle: 'none',
    backgroundColor: '#2cbbc3',
    padding: '1vh 2vh',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
  }
  const ulStyle = {
    position: 'fixed',
    margin: '1.2vh -2.1vw'
  }

  return (
    <ul style={ulStyle}>
      {
        options?.map(({ id, text }) => {
          return (<li style={liStyle} key={id}> {text} </li>)
        })
      }
    </ul>
  )
}
