import React,{useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFatorial(valor){
    if(valor < 0) return -1
    if(valor === 0) return 1
    return calcFatorial(valor-1) * valor;
}
const UseEffect = (props) => {
    const [valor, setValor] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(valor))
    }, [valor])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial == -1 ? "Dado inválido" : fatorial}</span>
                </div>
                
                <input 
                    type="number"   
                    className="input" 
                    value={valor} 
                    onChange={e => 
                    setValor(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
