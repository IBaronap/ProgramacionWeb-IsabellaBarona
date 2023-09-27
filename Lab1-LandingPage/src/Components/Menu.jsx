import React, { useState } from 'react'
import { Button } from './Button'

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
  const { id, text, options } = item

  const toggleShowList = () => setShowList(true)

  const toggleState = () => setShowList((prevState) => !prevState)

  const hoverStyle = {
    fontWeight: '500',
    textDecoration: 'inherit',
    margin: '0 1vh',
    padding: '2vh',
    color: showList ? 'white' : '#2cbbc3',
    backgroundColor: showList ? '#2cbbc3' : '#e1f1f2',
    cursor: showList ? 'pointer' : 'auto',
    borderRadius: '10px'
  }

  return (
    <li key={id} onMouseLeave={toggleState}>
      <a style={hoverStyle} onMouseEnter={toggleShowList}>
        {text}
      </a>
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
