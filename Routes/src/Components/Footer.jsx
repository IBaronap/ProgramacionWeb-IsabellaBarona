import React from 'react'

export function Footer () {
  const divStyle = {
    display: 'flex',
    backgroundColor: '#1a999f',
    padding: '1vh 2vh',
    fontSize: 'small'
  }

  return (
    <div style={divStyle}>
      <p>© 2023 Isabella Barona - All rights reserved</p>
    </div>
  )
}
