import React,{useState,useEffect} from 'react';

import Context from './Store/Context';
import {FormV8 as Form} from './Styles/index';
import PropTypes from 'prop-types';

const FormV8 = (props)=>{

    const rootForm = {
        id:Math.ceil(Math.random() * 1000),
        theme:props.theme,
        inputs:{

        },
        value:{

        },
        valid:false
    };
    const {children} = props;

    const [state,setState] = useState(setUpInputsAndForm(rootForm));

    useEffect(()=>{
        observerFormValue();
    },[state]);

    function observerFormValue(){
        props.observer(state);
    }

    function setUpInputsAndForm(rootForm){
        React.Children.forEach(children,(child)=>{
            setUpInputAndSetForm(child,rootForm);
        })
        return rootForm;
    }
    function setUpInputAndSetForm(input,rootForm){
        if(input.props.label !== undefined && input.props.name !== undefined && input.props.value !== undefined ){
            rootForm.inputs[input.props.name] = {
                formId:rootForm.id,
                value:input.props.value,
                valid:input.props.validators.every((validator)=>{
                    if(input.props.value !== undefined){
                        return validator(input.props.value);
                    }
                }),
                touch:false,
                setValue:(value)=>{
                    setInputsValue(value,input);
                    formIsValid();
                    setState({...state});
                },
                setTouch:()=>{
                    state.inputs[input.props.name].touch = true;
                    formIsValid();
                    setState({...state});
                }
            }
            rootForm.value[input.props.name] = input.props.value; 
           }

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
        <Form theme = {props.theme}>
            <Context.Provider value = {{
                store:state
            }}>
                {children}
            </Context.Provider>
        </Form>
    );
}
FormV8.propTypes = {
    theme: PropTypes.object,
    observer:PropTypes.func.isRequired
};
FormV8.defaultProps = {
    theme:"ligth"
}
export default FormV8;
