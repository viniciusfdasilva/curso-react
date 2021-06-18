import React, { Component } from 'react'
import './contador.css'

class Contator extends Component{
    constructor(props){
        super(props)

        this.state = {
            numero: this.props.numero || 0,
            passo: this.props.inicial || 5,
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

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h3>O valor atual é {this.state.numero}</h3>
                <div>
                    <input 
                        id="id_incrementador" 
                        className="inc"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    /><br/><br/>
                    <button onClick={_ => this.inc()} className="botaoinc">+</button>
                    <button onClick={_ => this.dec()} className="botaodec">-</button>
                </div>
            </div>
        );
    }
}

export default Contator