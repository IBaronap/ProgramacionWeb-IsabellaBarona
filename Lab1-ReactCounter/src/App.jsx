import React, { useState } from 'react'
import { Counter, Button, Header, Footer } from './components'

export function App () {
  const [counterValue, setCounterValue] = useState(0)

  const counterUpdate = (amount) => {
    const newdValue = counterValue + amount
    if (newdValue >= 0) {
      setCounterValue(newdValue)
    }
  }

  const divtStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '40%',
    margin: '2vw auto 0'
  }

  return (
    <>
      <Header title='Counter React App' />
      <div style={divtStyle}>
        <Button type='substract' onClick={() => counterUpdate(-1)} />
        <Counter value={counterValue} />
        <Button type='add' onClick={() => counterUpdate(+1)} />
      </div>
      <Footer />
    </>
  )
}
