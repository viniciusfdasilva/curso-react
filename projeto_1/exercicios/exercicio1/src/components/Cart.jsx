import React from "react"
import './css/cart.css'

const Cart = (props) =>{
    const div_style = {
        backgroundColor: props.backgroundColor, 
        borderColor: props.borderColor
    }

    return (
        <React.Fragment>
            <div class="container" style={div_style}>
                <h2>{props.title}</h2>
            </div>
        </React.Fragment>
    )
}

export default Cart