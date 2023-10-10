import React from 'react'
import mainStyles from './Main.module.css'

export function Service({title, src}){

    return (
        <div>
            <div className={mainStyles.iconDiv}> 
                <img className={mainStyles.icon} src={src}></img>
            </div>
            <h3>{title}</h3>
        </div>
    )
}