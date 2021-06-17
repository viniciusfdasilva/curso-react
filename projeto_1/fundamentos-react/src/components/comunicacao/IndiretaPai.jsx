import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = ''
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nome,idade,nerd){
        
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