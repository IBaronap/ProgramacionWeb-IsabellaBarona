import React from 'react'
import { Button } from './Button'
import mainStyles from './Main.module.css'

export function Main () {
  return (
    <>
      <div className={mainStyles.flex}>
        <div className={mainStyles.infoDivStyle}>
          <div className={mainStyles.marginStyle}>
            <h1>The best experience for your pets</h1>
            <h4>Your pet will be in professional hands!</h4>
          </div>
          <Button type='main' title='Book appointment' />
          <Button type='second' title='Our services' />
        </div>
        <img className={mainStyles.petImg} src='./src/Assets/pets.png' />
      </div>

      <div className={mainStyles.separator} />

      <div className={mainStyles.servicesDiv}>
        <h2>Our services</h2>
        <div className={mainStyles.services}>
          <Service title='Veterinary' src='./src/Assets/vetIcon.png' />
          <Service title='Grooming' src='./src/Assets/groomIcon.png' />
          <Service title='Accesories' src='./src/Assets/accIcon.png' />
        </div>
      </div>
    </>
  )
}

export function Service ({ title, src }) {
  return (
    <div>
      <div className={mainStyles.iconDiv}>
        <img className={mainStyles.icon} src={src} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}
