import React from 'react';
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'

export default _ =>
    <>
        <ComParametro 
            aluno="Pedro" 
            nota={5.8}/>

        <ComParametro 
            aluno="Maria" 
            nota={10}/>

        <Fragmento></Fragmento>

        <Aleatorio min={1} max={60}></Aleatorio>
    </>
