import React,{useState,useEffect} from 'react';
import './App.css';

import FormV8 from './FormV8/index';
import Input from './FormV8/Components/Input';
import Select from './FormV8/Components/Select';
import {OptionSelect} from './FormV8/Styles/index';
import * as Mask from './FormV8/Mask/index';
import * as validator from './FormV8/Validators/index';
import {dark,light,liveDark} from './FormV8/Styles/theme';
function Button(){
  return(
    <button>enviar</button>
  );
}
function App() {

  const [form,setForm] = useState({});
  const [cars,setCars] = useState( [
    {id:Math.ceil(Math.random() * 1000),desc:"supra",brand_id:5},
    {id:Math.ceil(Math.random() * 1000),desc:"corola",brand_id:5},
    {id:Math.ceil(Math.random() * 1000),desc:"sw4",brand_id:5},
    {id:Math.ceil(Math.random() * 1000),desc:"teste",brand_id:5},

    {id:Math.ceil(Math.random() * 1000),desc:"gol",brand_id:2},
    {id:Math.ceil(Math.random() * 1000),desc:"virtus",brand_id:2},
    {id:Math.ceil(Math.random() * 1000),desc:"jetta",brand_id:2},
    {id:Math.ceil(Math.random() * 1000),desc:"golf",brand_id:2},
  ]);
  const [selectCars,setSelectCars] = useState([]);


  useEffect(()=>{
    
    if(form.value !== undefined && form.value.brand !== undefined){

        const vet = cars.filter((car)=>{
            if(car.brand_id === parseInt(form.value.brand )){
              return car;
            }
        })
        if(vet.length > 0){
          console.log(vet);
          setSelectCars(vet);
        }
    }
  },[form])
  const option = [
    {id:1,desc:"Ferrari"},
    {id:2,desc:"Volsk"},
    {id:3,desc:"Chevrole"},
    {id:4,desc:"coverte"},
    {id:5,desc:"Toyota"},
  ]
  
  return (
    <div className="App">
      <FormV8 observer = {(data)=>{
          setForm(data);
      }} theme = {dark}>

        
      <Input label  = "Id" type = "number" name = "id" value = "" message = "Por favor, informe um nome correto!"
        
        validators = {[
            validator.require,
            validator.max(1000),
            validator.min(0)
        ]}
       
          /> 

      <Input label  = "Name" type = "text" name = "name" value = "" message = "Por favor, informe um nome correto!"
        
        validators = {[
            validator.require,
            validator.textAndNumber
        ]}
       
          /> 
       
         <Input label  = "CellPhone" type = "text" name = "cellphone" value = "" message = "Por favor, informe seu numero correto!"
          maxLength = {15}
          validators = {[
            (value)=>{
              return value !== "";
            }
          ]}
          mask = {
            Mask.phone
          }
        /> 
        <Input label  = "Cpf" type = "text" name = "cpf" value = "" message = "Por favor, informe um nome correto!"
          maxLength = {18}
          validators = {[
              validator.cpf
          ]}

          mask = {
            Mask.cpf
          }
        /> 
        <Input label  = "E-mail" type = "text" name = "email" value = "" message = "Por favor, informe um nome correto!"
          maxLength = {18}
          validators = {[
              validator.email
          ]}
        /> 
        <Input label  = "Birth date" type = "date" name = "birthDate" value = "" message = "Por favor, informe um nome correto!"
           validators = {[
            (value)=>{
              return value !== "";
            }
          ]}
        /> 
         <Select label  = "Brand" name = "brand" value = "" message = "Por favor, informe um nome correto!"
           validators = {[
            (value)=>{
              return value !== "";
            }
            ]}
          >
            {
              option.map((item)=>{
                return <OptionSelect value = {item.id} key = {item.id}>
                  {item.desc}
                </OptionSelect>
              })
            }
        </Select> 
        <Select label  = "Cars" name = "car" value = "" message = "Por favor, informe um nome correto!"
           validators = {[
            (value)=>{
              return value !== "";
            }
            ]}
          >
            {
              selectCars.map((item)=>{
                    return <option value = {item.id} key = {item.id}>
                      {item.desc}
                    </option>
              })
            }
        </Select> 
        <Button/>
      </FormV8>
    </div>
  );
}

export default App;
