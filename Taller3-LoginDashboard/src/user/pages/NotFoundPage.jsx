import React from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage () {
  const textStyle = {
    width: '35vw',
    margin: '28vh 30vw 6vh 30vw'
  }

  const h1Style = {
    color: '#FF2828'
  }

  const imgStyle = {
    zIndex: '-1',
    width: '30vw',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '0.03'
  }

  const navigate = useNavigate()

  return (
    <>
      <div style={textStyle}>
        <h1 style={h1Style}>404</h1>
        <h3>There's nothing to see here</h3>
        <p>The page you were looking for does not exist</p>
      </div>
      <Button onClick={() => navigate(-1)} title='Go back' />
      <img style={imgStyle} src='../../src/Assets/LogoTradi.svg' />
    </>
  )
}
