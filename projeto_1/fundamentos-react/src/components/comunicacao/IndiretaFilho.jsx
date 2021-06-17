import React from 'react'

export default props => {
    const callback = props.quandoclicar
    const gerarIdade = (max,min) => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <button onClick={ _ => callback('João',53,true) }>CLIQUE AQUI</button>
        </div>
    );
}