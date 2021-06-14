import React from 'react';
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'
import Card from '../layout/Card'
import '../../index.css'
import '../../App.css'

export default _ =>
    <div className='app'> 
        <div className='cards'>
            <Card titulo='Desafio aleatorio' color='#fa5'>
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>


            <Card titulo='Fragmento'>
                <Fragmento></Fragmento>
            </Card>

            <Card titulo='Com Parametro'>
                <ComParametro aluno="Pedro" nota={5.8}/>
                <ComParametro aluno="Maria" nota={10}/>
            </Card>   
        </div>  
    </div>
