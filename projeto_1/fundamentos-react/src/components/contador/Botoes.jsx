import React from 'react'

export default props => {
    return(
        <div>
            <button onClick={props.incrementar} className="botaoinc">+</button>
            <button onClick={props.decrementar} className="botaodec">-</button>
        </div>
    )
}