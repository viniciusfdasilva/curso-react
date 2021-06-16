import React from 'react';
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'
import Card from '../layout/Card'
import '../../index.css'
import '../../App.css'
import Familia from './Familia'
import FamiliaMembro from './FamiliaMembro';
import ListaAlunos from './ListaAlunos';
import Produtos from '../repeticoes/Produtos';
import Parouimpar from '../condicional/Parouimpar';
import Usuarioinfo from '../condicional/Usuarioinfo'

export default _ =>
    <div className='app'> 
        <div className='cards'>
            <Card titulo='Renderização condicional' color='#fb6'>
                <Parouimpar numero={20}></Parouimpar>
                <Usuarioinfo usuario={{nome: 'Fernando'}}/>
                <Usuarioinfo usuario={{email: 'fernando@gmail.com'}}/>
            </Card>
            
            <Card titulo='Desafio repetição - produtos' color='#8fb'>
                <Produtos></Produtos>
            </Card>

            <Card titulo='Aulas de repetição 01' color='#b9f'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='Componentes com filho' color='#9af'>
                <Familia sobrenome='Ferreira'>
                    <FamiliaMembro nome='Pedro'></FamiliaMembro>
                    <FamiliaMembro nome='Ana'></FamiliaMembro>
                    <FamiliaMembro nome='Gustavo'></FamiliaMembro>
                </Familia>
            </Card>


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
