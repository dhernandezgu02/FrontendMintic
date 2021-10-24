import React from "react";
import './Title.css';

const Title = ({text},{classname}) =>{
    return (
        <div className='title-countainer'>
            <label className={classname}> {text} </label>
        </div>
    )
};

export default Title;
