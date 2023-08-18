import React from 'react'
import { Counter, Button, Header, Footer } from './components'

export function App(){
    
    const divtStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '40%',
        margin: '2vw auto 0'
    }

    return (
        <>   
            <Header title="Counter React App"/>
            <div style={divtStyle}>
                <Button type="substract"/>
                <Counter value="0"/>
                <Button type="add"/>
            </div>
            <Footer/>
        </>
    )
}