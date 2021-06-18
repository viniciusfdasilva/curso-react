import React, { Component } from 'react'
import './contador.css'

class Contator extends Component{
    constructor(props){
        super(props)

        this.state = {
            numero: this.props.numero || 0,
            passo: this.props.inicial || 10,
        }
    }

    inc(){
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec(){
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h3>O valor atual é {this.state.numero}</h3>
                <div>
                    <button onClick={_ => this.inc()} className="botaoinc">+</button>
                    <button onClick={_ => this.dec()} className="botaodec">-</button>
                </div>
            </div>
        );
    }
}

export default Contator