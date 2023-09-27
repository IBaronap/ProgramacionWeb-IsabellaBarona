import React from 'react'
import { Form } from './Form'

export function Header ({ title }) {
  const divStyle = {
    padding: '1vh'
  }

  return (
    <div>
      <header style={divStyle}>
        <h1>{title}</h1>
      </header>
      <Form placeholder='Name your task' />
    </div>
  )
}
