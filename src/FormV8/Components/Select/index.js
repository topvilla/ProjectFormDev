import React,{useState} from 'react';
import Connect from '../../Store/Connect';
import {SelectContainer,MessageErroForm} from '../../Styles/index';

const Select = (props)=>{
    const [actionMovin,setActionMovin] = useState(false);
    const {label,children,name,store,message} = props;
    const inputV8 = store.inputs[name];
    const handlerEvent = (event)=>{
        handlerEventFocus(event);
        handlerEventBlur(event);
        inputV8.setValue(event.target.value);
    }
    const handlerEventFocus = (event) =>{
        if(event.type === "focus"){
            handlerActionMovein(!actionMovin);
            inputV8.setTouch(event.target.value);
        } 
    }
    const handlerEventBlur = (event)=>{
        if(event.type === "blur"){
            handlerActionMovein(!actionMovin);
        } 
    }
    const handlerActionMovein = (open)=>{
        if(inputV8.valid){
            setActionMovin(inputV8.valid);
            return;
        }
        setActionMovin(open);

    }
    const handlerMessageError = ()=>{
       if(inputV8.touch === true && inputV8.valid === false){
            return <MessageErroForm>{message}</MessageErroForm>
       }
    }
    return(
        
        <SelectContainer showLabel = {actionMovin} theme = {store.theme}  isValid = {inputV8.valid} isTouch = {inputV8.touch}>
            <label>{label}</label>
            <select  name = {name} value = {inputV8.value} 
            onChange = {handlerEvent}
            onFocus = {handlerEvent}
            onBlur  = {handlerEvent}
            >
                {
                    children
                }
            </select>
            <label>{label}</label>

        {
            handlerMessageError()
        }
        </SelectContainer>
    );
}

export default Connect(Select);