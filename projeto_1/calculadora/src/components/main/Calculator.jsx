import React, {Component} from 'react'
import './calculator.css'
import Button from './../Button'
import Display from '../../components/Display'

const initialState = {
    displayValue: '0',
    clearMemory: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{
    state =  {...initialState}

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearMemory: true})
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }
            
            values[1] = 0
            this.setState({
                displayValue: values[0], 
                operation: equals ? null : operation, 
                current: equals ? 0 : 1,
                clearMemory: !equals,
                values
            })
        }
    }

    adicionarDigito(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearMemory
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearMemory: false})

        if(n != '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }

    }

    render(){
        const adicionarDigito = n => this.adicionarDigito(n)
        const setOperation = operation => this.setOperation(operation)

        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
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