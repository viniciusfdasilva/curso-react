import React,{Component, useState} from "react";
import Display from "./Display"
import Input from "./Input"
import Button from "./Button"
import "./mega.css"

class Mega extends Component{
    constructor(props){
        super(props)

        this.state = {
            numero: props.numero || 2,
            numeros: [],
            sorteado: 0
        }

        this.render(props)
    }

    sortear = () =>{
        for(var i = 0; i < this.state.numero; i++)
        {
            var number = Math.floor(Math.random() * 60)
            while(this.state.numeros.indexOf(number) >= 0){
                number = Math.floor(Math.random() * 60)
            }
            this.state.numeros.push(number)
        }
        this.state.sorteado = this.state.numeros[parseInt(Math.random() * this.state.numero)];
        
    }

    setValue = (value) =>{
        this.setState({ numero: value})
    }

    render = (props) =>{
    
        return(
            <div>
                <Display numero={this.state.sorteado}/><br/>
                <Input getValue={this.setValue}/><br/><br/>
                <Button click={this.sortear}/>
            </div>
        );
    }
}



export default Mega