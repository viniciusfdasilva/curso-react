import React from 'react'

export default props => {
    return (
        <div>
            <span><div>{props.nome}</div></span>
            <span><div>{props.idade}</div></span>
            <span><div>{props.nerd ? 'Verdadeiro' : 'Falso'}</div></span>
        </div>
    );
}