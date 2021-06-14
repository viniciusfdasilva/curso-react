import React from 'react'
import ReactDOM from 'react-dom'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
  <div>
    <ComParametro 
      aluno="Pedro" 
      nota={5.8}/>

    <ComParametro 
      aluno="Maria" 
      nota={10}/>
  </div> ,
  document.getElementById('root')
)