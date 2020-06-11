import React from 'react';

const Input = (props) =>{
    return (
        <div>
            <input type="text" onChange={props.onChange} value={props.currentName}></input>
        </div>
    );
};

export default Input;