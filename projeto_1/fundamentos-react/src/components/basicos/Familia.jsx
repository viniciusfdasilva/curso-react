import React, {cloneElement} from 'react'
export default (props) => {
    return (
        <div>
            {props.children.map((el, i) =>{
                return cloneElement(el, {...props, key: i})
            })}
        </div>  
    );
}