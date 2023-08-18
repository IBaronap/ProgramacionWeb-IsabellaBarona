import React from 'react'
import { Button } from './Button'
import { Service } from './Service'
import styles from './Button.module.css'
import mainStyles from './Main.module.css'

export function Main(){

    return (
        <>
        <div className={mainStyles.flex}>
            <div className={mainStyles.infoDivStyle}>
                <div className={mainStyles.marginStyle}>
                    <h1>The best experience for your pets</h1>
                    <h4>Your pet will be in professional hands!</h4>
                </div>
                <Button className={styles.mainBTN} title='Book appointment'/>
                <Button className={styles.secondBTN} title='Our services'/>
            </div>
            <img className={mainStyles.petImg} src='./src/Assets/pets.png'></img>
        </div>

        <div className={mainStyles.separator}></div>

        <div className={mainStyles.servicesDiv}>
            <h2>Our services</h2>
            <div className={mainStyles.services}>
                <Service title='Veterinary' src='./src/Assets/vetIcon.png'/>
                <Service title='Grooming' src='./src/Assets/groomIcon.png'/>
                <Service title='Accesories' src='./src/Assets/accIcon.png'/>
            </div>
        </div>
        </>
    )
}