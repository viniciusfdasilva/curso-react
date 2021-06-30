import React, { useContext, useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)
    const [value, setValue] = useState(0)

    function addNumber(delta, op){
        setState({
            ...state,
            number: op === "+" ? state.number + delta : 
                    op === "-" ? state.number - delta : state.number 
        })
    }

    const {number, text, setNumber, setText} = useContext(AppContext)

    useEffect(() =>{
        if(number > 1250){
            setText("Eita!!!!")
        }
    },[number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="#Exercicio #01"/>
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

                <input type="number" 
                       className="input" 
                       value={value} 
                       onChange={e => setValue(e.target.value === "" ? 0 : e.target.value)}
                />
                
                <div>
                    <button className="btn" onClick={() => addNumber(parseInt(value),"+")}>+1</button>
                    <button className="btn" onClick={() => addNumber(parseInt(value),"-")}>-1</button>
                </div>
            </div>

            <SectionTitle title="#Exercicio #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number-1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number+1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
