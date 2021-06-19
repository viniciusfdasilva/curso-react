import React from "react"

const input = (props) => {
    const getInput = () =>{
        props.getValue(document.getElementById("id_input").value)
    }

    return(

        <input type="number" className="input-sorteador" id="id_input"onChange={getInput}/>
    );
}

export default input