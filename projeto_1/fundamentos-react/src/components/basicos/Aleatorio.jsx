import React from 'react'

export default props => {
    const {min, max} = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return ( 
        <>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor mínimo:</strong> {props.min}</p>
            <p><strong>Valor máximo:</strong> {props.max}</p>
            <p><strong>Valor escolhido</strong> {props.max}</p>
        </>
    )
}