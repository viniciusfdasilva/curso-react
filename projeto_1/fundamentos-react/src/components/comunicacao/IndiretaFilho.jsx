import React from 'react'

export default props => {
    const callback = props.quandoclicar
    
    return (
        <div>
            <button onClick={ _ => callback('João',53,true) }>CLIQUE AQUI</button>
        </div>
    );
}