import React from 'react'
import produtos from './../../data/produtos'
import './produto.css'

export default props =>{
    const produtos_th = produtos.map((produto, key) => {
        return( <tr key={produto.id}>
                    <th><strong>{produto.id}</strong></th>
                    <th><strong>{produto.descricao}</strong></th>
                    <th><strong>{produto.preco}</strong></th>
                </tr>
        );
    });

    return (
        <table>    
            <tr>
                <th class="first">Identificação</th>
                <th class="first">Descrição</th>
                <th class="first">Preço</th>
            </tr>
          
            {produtos_th}
        </table>
    );
}