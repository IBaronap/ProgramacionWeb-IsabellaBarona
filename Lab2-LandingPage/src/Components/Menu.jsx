import React from 'react'
import { Button } from './Button'
import styles from './Button.module.css'

export function Menu(){

    return (
        <div >
            <a>Home</a>
            <a>Services</a>
            <a>Contact</a>
            <a>About</a>

            <Button className={styles.mainBTN} title='Book appointment'/>
        </div>
    )
}