import React from "react"

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <strong>{props.aluno}</strong> Tem nota: <strong>{props.nota}</strong> e foi <strong>{status}</strong>
        </div>
    )
}