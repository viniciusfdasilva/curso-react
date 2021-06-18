import React from 'react'

export default props => {
    return(
        <div>
            <input 
                id="id_incrementador" 
                className="inc"
                type="number"
                value={props.passo}
                onChange={props.setPasso}
            /><br/><br/>
        </div>
    )
}