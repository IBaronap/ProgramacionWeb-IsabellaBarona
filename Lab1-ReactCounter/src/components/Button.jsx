import React from 'react'

export function Button({type}){

    let btnStyle;

    if(type == 'add'){
        btnStyle = {
            backgroundColor: 'rgba(73, 3, 101, 0.6)',
            color: '#eee2f6',
            borderRadius: '25px 70px 70px 25px',
        }
    }

    if(type == 'substract'){
        btnStyle = {
            backgroundColor: 'rgba(73, 3, 101, 0.3)',
            color: '#eee2f6',
            borderRadius: '70px 25px 25px 70px',
        }
    }

    return (
        <div>
            <button style={btnStyle}> 
                {type} 
            </button>
        </div>
    )
}