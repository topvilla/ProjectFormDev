import React,{useState,useEffect} from 'react';

import Context from './Store/Context';
import {FormV8 as Form} from './Styles/index';
const FormV8 = (props)=>{
    const {children} = props;

    const [state,setState] = useState(setUpInputs());
    
    useEffect(()=>{
        observerFormValue();
    },[state])
    function observerFormValue(){
        props.observer(state);
    }
    function setUpInputs(){
        const rootForm = {
            inputs:{

            },
            value:{

            },
            valid:false
        };
        React.Children.forEach(children,(child)=>{
           if(child.props.label !== undefined && child.props.name !== undefined && child.props.value !== undefined ){
            rootForm.inputs[child.props.name] = {
                value:child.props.value,
                valid:child.props.validators.every((validator)=>{
                    if(child.props.value !== undefined){
                        return validator(child.props.value);
                    }
                }),
                touch:false,
                setValue:(value)=>{
                    setInputsValue(value,child);
                    formIsValid();
                    setState({...state});
                },
                setTouch:()=>{
                    state.inputs[child.props.name].touch = true;
                    formIsValid();
                    setState({...state});
                }
            }
            rootForm.value[child.props.name] = child.props.value; 
           }
          
        })
        return rootForm;
    }
    function setInputsValue(value,child){
        state.inputs[child.props.name].value = value;
        state.value[child.props.name] = value;
        state.inputs[child.props.name].valid = child.props.validators.every((validator)=>{
            if(state.value[child.props.name] !== undefined){
                return validator(state.value[child.props.name]);
            }
        });
    }
    function formIsValid(){
        let isValid = true;
        for(let prop in state.inputs){
            if(state.inputs[prop].valid === false){
                isValid = false;
            }
        }
        if(state.valid !== isValid){
            state.valid = isValid;
        }
    }
   
    return(
        <Form>
            <Context.Provider value = {{
                store:state
            }}>
                {children}
            </Context.Provider>
        </Form>
    );
}
export default FormV8;
