import React from 'react'
import ReactDOM from 'react-dom'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
  <>
    <ComParametro 
      aluno="Pedro" 
      nota={5.8}/>

    <ComParametro 
      aluno="Maria" 
      nota={10}/>

    <Fragmento></Fragmento>
  </> ,
  document.getElementById('root')
)