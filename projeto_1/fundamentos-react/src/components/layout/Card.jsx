import React from 'react';
import './Card.css'

export default props =>{
    return (
        <div className='Card'>
            <div className='title'>{props.titulo}</div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}