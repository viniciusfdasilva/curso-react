import React, {Component} from 'react'
import './calculator.css'
import Button from './../Button'
import Display from '../../components/Display'

export default class Calculator extends Component{
    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }

    adicionarDigito(n){
        console.log(n)
    }

    render(){
        const adicionarDigito = n => this.adicionarDigito(n)
        const setOperation = operation => this.setOperation(operation)

        return(
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC"click={() => this.clearMemory()} triple/>
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={adicionarDigito}/>
                <Button label="8" click={adicionarDigito}/>
                <Button label="9" click={adicionarDigito}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={adicionarDigito}/>
                <Button label="5" click={adicionarDigito}/>
                <Button label="6" click={adicionarDigito}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={adicionarDigito}/>
                <Button label="2" click={adicionarDigito}/>
                <Button label="3" click={adicionarDigito}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={setOperation} double/>
                <Button label="." click={adicionarDigito}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}