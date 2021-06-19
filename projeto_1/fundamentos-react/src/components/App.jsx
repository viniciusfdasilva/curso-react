/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ComParametro from './basicos/ComParametro'
import Fragmento from './basicos/Fragmento'
import Aleatorio from './basicos/Aleatorio'
import Card from './layout/Card'
import '../index.css'
import '../App.css'
import Familia from './basicos/Familia'
import DiretaPai from './comunicacao/Diretapai' 
import FamiliaMembro from './basicos/FamiliaMembro';
import ListaAlunos from './basicos/ListaAlunos';
import Produtos from './repeticoes/Produtos';
import Parouimpar from './condicional/Parouimpar';
import Usuarioinfo from './condicional/Usuarioinfo'
import IndiretaPai from './comunicacao/IndiretaPai'
import Input from './formulario/Input'
import Contador from './contador/Contador'
import Mega from './mega/Mega'

export default _ =>
    <div className='app'> 
        <div className='cards'>

            <Card titulo='Mega Sena' color='tomato'>
                <Mega/>
            </Card>

            <Card titulo='Contador' color='#fb6'>
                <Contador numero={0}/>
            </Card>

            <Card titulo='Componente controlado' color='#fb6'>
                <Input/>
            </Card>

            <Card titulo='Comunicação indireta' color='#fb6'>
                <IndiretaPai/>
            </Card>

            <Card titulo='Comunicação direta' color='#fb6'>
                <DiretaPai/>
            </Card>

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
