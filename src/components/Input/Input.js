import React, { useState } from 'react'

function Input(props) {
    const [type] =  useState(props.type);
    const [inputValue,setInputValue] = useState('');
    const [placeholder] = useState(props.placeholder);
    const [classSize] = useState(props.class);

    function handleChange(event){
        setInputValue(event.target.value);
        props.onChange(inputValue);
    }

    return (
        <input className={`col-${classSize} form-control`} type={type} value={inputValue} onChange={handleChange} placeholder={placeholder} ></input>
    )
}

export default Input
