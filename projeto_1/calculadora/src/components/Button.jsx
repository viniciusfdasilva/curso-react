import React from 'react'
import './button.css'

export default props => {
    return (
        <button onClick={e => props.click && props.click(e.label)}
        className={`
            button 
            ${props.operation ? 'operation' : ''}
            ${props.operation ? 'double' : ''}
            ${props.operation ? 'triple' : ''}
        `}>
            {props.label}
        </button>
    )
}