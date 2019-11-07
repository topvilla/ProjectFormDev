import React,{useState} from 'react';
import Connect from '../../Store/Connect';
import {InputContainer,MessageErroForm} from '../../Styles/index'



const Input = (props)=>{    
    const [actionMovin,setActionMovin] = useState(false);
    const {label,type,name,store,message,mask,maxLength} = props;
    const inputV8 = store.inputs[name];

    const handlerEvent = (event)=>{

        handlerEventFocus(event);
        handlerEventBlur(event);
        setStoreValueInput(event);

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
    const setStoreValueInput = (event)=>{
        const value = event.target.value;
        
            if(mask !== undefined && event.key !== undefined){
                inputV8.setValue(mask(value,event.key));
                return;
            }
            inputV8.setValue(value);
       
    }
    const handlerMessageError = ()=>{
       if(inputV8.touch === true && inputV8.valid === false){
            return <MessageErroForm>{message}</MessageErroForm>
       }
    }
   
    return(
        <InputContainer showLabel = {actionMovin}   isValid = {inputV8.valid} isTouch = {inputV8.touch} theme = {store.theme}> 
            <input  type = {type} name = {name} value = {inputV8.value} 
             onChange = {handlerEvent}
             onFocus = {handlerEvent}
             onBlur  = {handlerEvent}
             onKeyUp = {handlerEvent}
             maxLength = {maxLength}

            />
            <label>{label}</label>
            {
                handlerMessageError()
            }
        </InputContainer>
    );
}
// Input.propTypes = {
//     label:PropTypes.string.isRequired,
//     type:PropTypes.string.isRequired,
//     name:PropTypes.string.isRequired,
//     store:PropTypes.object.isRequired,
//     message:PropTypes.string.isRequired,
//     mask:PropTypes.func
// }

export default Connect(Input);