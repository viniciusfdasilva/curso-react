import React,{Component} from "react";
import Display from "./Display"
import Input from "./Input"
import Button from "./Button"
import "./mega.css"

class Mega extends Component{
    constructor(props){
        super(props)

        this.state = {
            numero: props.numero || 2,
            numeros: []
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
        console.log(parseInt(Math.random() * this.state.numero))
        return this.state.numeros[parseInt(Math.random() * this.state.numero)]
    }

    render = (props) =>{
    
        return(
            <div>
                <Display/><br/>
                <Input/><br/><br/>
                <Button click={this.sortear}/>
            </div>
        );
    }
}



export default Mega