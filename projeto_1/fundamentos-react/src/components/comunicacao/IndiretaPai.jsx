import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setName] = useState('')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome,idade,nerd){
        setName(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ? 'Verdadeiro' : 'False'}</span>
            <IndiretaFilho quandoclicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
}