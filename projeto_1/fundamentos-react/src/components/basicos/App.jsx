import React from 'react';
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'


export default _ =>
    <>
        <ComParametro 
            aluno="Pedro" 
            nota={5.8}/>

        <ComParametro 
            aluno="Maria" 
            nota={10}/>

        <Fragmento></Fragmento>
    </>
