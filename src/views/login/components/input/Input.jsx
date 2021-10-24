import React from "react";
import './Input.css';

const Input = ({attribute, handleChange, param,value}) =>{
    return(
        <div className='input-container'>
            <input id={attribute} 
            className={ param ? 'input-error' :'regular-style'}
            name={attribute.name} 
            placeholder={attribute.placeholder} 
            type={attribute.type} 
            onChange={(e) => handleChange(e.target.name, e.target.value)} 
            value={value}
            // size='30'
            // maxLength='25'
            />
            
        </div>
    )
};

export default Input;
