import React from 'react'
import { Menu } from './Menu'

export function Header () {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#e1f1f2',
    padding: '2vh',
    position: 'fixed',
    width: '99%',
    height: '8vh',
    top: '0'
  }

  const items = [
    {
      id: 1,
      text: 'Home',
      options: null,
      path: '/'
    },
    {
      id: 2,
      text: 'Services',
      options: [
        {
          id: crypto.randomUUID,
          text: 'Veterinary'
        },
        {
          id: crypto.randomUUID,
          text: 'Grooming'
        },
        {
          id: crypto.randomUUID,
          text: 'Accesories'
        }
      ],
      path: '/services'
    },
    {
      id: 3,
      text: 'Contact',
      options: null,
      path: '/contactus'
    },
    {
      id: 4,
      text: 'About',
      options: [
        {
          id: crypto.randomUUID,
          text: 'Mision/Vision'
        },
        {
          id: crypto.randomUUID,
          text: 'History'
        }
      ],
      path: '/aboutus'
    }
  ]

  return (
    <div style={divStyle}>
      <img src='./src/Assets/brand.png' />
      <Menu menu={items} />
    </div>
  )
}
