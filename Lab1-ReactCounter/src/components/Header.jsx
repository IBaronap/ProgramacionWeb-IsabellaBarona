import React from 'react'

export function Header({title}){
    
    const divStyle = {
        padding: '2vw',
        margin: '9vw auto 0'
    }

    return (
        <header style={divStyle}>
            <h1>{title}</h1>
        </header>
    )
}