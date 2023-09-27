import React from 'react'

export function Counter ({ value }) {
  const divStyle = {
    backgroundColor: '#dcc7ea',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.4), -5px -5px 15px rgba(255, 255, 255, 0.7)',
    padding: '2vw',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    fontSize: 'larger',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2vw auto'
  }

  const shadow = {
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.8)'
  }

  return (
    <div style={divStyle}>
      <h1 style={shadow}>{value}</h1>
    </div>
  )
}
