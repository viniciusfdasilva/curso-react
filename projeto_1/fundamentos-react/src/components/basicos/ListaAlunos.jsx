import React from "react"
import alunos from "./../../data/alunos"

export default props =>{
    const alunos_li = alunos.map(aluno => {
        return (
            <li key={alunos.id}> {aluno.id} {aluno.nome} {aluno.nota} </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle:"none"}}>{alunos_li}</ul>
        </div>
    );
}