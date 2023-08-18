import React from 'react'
import { Menu } from './Menu'

export function Header({value}){
    
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#e1f1f2',
        padding: '2vh',
        position: 'fixed',
        width: '99%',
        top: '0'
    }

    const logoStyle = {
        width: '6vh'
    }

    return (
        <div style={divStyle}>
            <img style={logoStyle} src='https://img.freepik.com/free-icon/paw_318-530213.jpg?w=2000'></img>
            <Menu/>
        </div>
    )
}