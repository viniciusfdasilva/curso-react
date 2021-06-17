import React from 'react'
import Diretafilho from './Diretafilho'

export default props => {
    return (
        <div>
            <Diretafilho nome='Junior' idade={20} nerd={true}></Diretafilho>
            <Diretafilho nome='Gabriel' idade={17} nerd={false}></Diretafilho>
        </div>
    );
}