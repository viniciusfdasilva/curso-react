import React from 'react'
import produtos from './../../data/produtos'
import './produto.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const produtos_th = produtos.map((produto) => {
        return( <tr key={produto.id}>
                    <th><strong>{produto.id}</strong></th>
                    <th><strong>{produto.descricao}</strong></th>
                    <th><strong>R$ {produto.preco.toFixed(2).replace('.',',')}</strong></th>
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