import React, { Component } from 'react'
import './contador.css'
import Display from './Display'
import Botoes from './Botoes'
import Form from './Form'

class Contator extends Component{
    constructor(props){
        super(props)

        this.state = {
            numero: this.props.numero || 0,
            passo: this.props.inicial || 5,
        }
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () =>{
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
                <Display numero={this.state.numero}/>
                <Form passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        );
    }
}

export default Contator