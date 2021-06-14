import React from "react"

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    var nota = Math.ceil(props.nota)
    
    return (
        <div>
            <strong>{props.aluno}</strong> Tem nota: <strong>{nota}</strong> e foi <strong>{status}</strong>
        </div>
    )
}