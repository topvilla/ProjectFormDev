import styled from 'styled-components';


export const FormV8 = styled.form`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    display:flex;
    flex-flow:column;
    padding:10px;
    overflow:hidden;
    font-family: 'Roboto', sans-serif;
    padding-bottom:100px;
    background-color:${prop=>prop.theme.backgroundColor};
    color:${prop=>prop.theme.color};
`
export const InputContainer = styled.div`
    margin-top:60px;
    margin-bottom:60px;
    height:120px;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:flex-end;
    overflow:visible;
    padding:5px;
    position: relative;
    flex:1;
    label{
        width:100%;
        display:flex;
        align-items:center;
        padding:5px;
        position: absolute;
        flex:1;
        transition:.5s;
        z-index:1;
        @media screen and (min-width: 1025px) and (max-width:20000px){
            bottom:${prop=>prop.showLabel?"60px":"20px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:${prop=>prop.showLabel?"1em":"1.2em"};
            height:${prop=>prop.showLabel?"15px":"30px"};
            left:${prop=>prop.showLabel?"10px":"1px"};
            background-color:${prop=>prop.theme.backgroundColor};
            z-index:${prop=>prop.showLabel?5:1};
            width:80px;
            justify-content:center;
            border-radius:10px;


        }
        @media screen and (min-width: 601px) and (max-width:1024px){
            bottom:${prop=>prop.showLabel?"60px":"20px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:${prop=>prop.showLabel?"1em":"1.2em"};
            height:${prop=>prop.showLabel?"15px":"30px"};
            left:${prop=>prop.showLabel?"10px":"1px"};
            background-color:${prop=>prop.theme.backgroundColor};
            z-index:${prop=>prop.showLabel?5:1};
            width:80px;
            justify-content:center;
            border-radius:10px;

        }
        @media screen and (min-width: 0px) and (max-width:600px){
            bottom:${prop=>prop.showLabel?"75px":"15px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:1.2em;
            height:30px;

        }
    }
    input{
        border:none;
        padding:5px;
        width:100%;
        color:${prop=>prop.theme.color};
        margin-bottom:5px;
        z-index:2;
        background-color:transparent;
        display:flex;
        font-size:${prop=>prop.showLabel?"1em":"0px"};
        @media screen and (min-width: 1025px) and (max-width:20000px){
            ${prop=>prop.isTouch && prop.isValid === true?`border:2px solid ${prop.theme.border}`:`border:2px solid gray`};
            :hover{
            border:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            height:50px;
            border-radius:5px;
        }
        @media screen and (min-width: 601px) and (max-width:1024px){
            ${prop=>prop.isTouch && prop.isValid === true?`border:2px solid ${prop.theme.border}`:`border:2px solid gray`};
            :hover{
            border:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            border-radius:5px;

            height:45px;

        }
        @media screen and (min-width: 0px) and (max-width:600px){
            ${prop=>prop.isTouch && prop.isValid === true?`border-bottom:2px solid ${prop.theme.border}`:`border-bottom:2px solid gray`};
            :hover{
             border-bottom:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            height:35px;

        }


        
    }
  
    
`
export const SelectContainer = styled(InputContainer)`
    
    label{
        width:100%;
        display:flex;
        align-items:center;
        padding:5px;
        position: absolute;
        flex:1;
        transition:.5s;
        z-index:1;
        @media screen and (min-width: 1025px) and (max-width:20000px){
            bottom:${prop=>prop.showLabel?"55px":"20px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:1.2em;
            height:${prop=>prop.showLabel?"15px":"30px"};
            left:${prop=>prop.showLabel?"20px":"10px"};
            background-color:${prop=>prop.theme.backgroundColor};
            z-index:${prop=>prop.showLabel?5:1};
            width:120px;
            justify-content:center;
            border-radius:10px;


        }
        @media screen and (min-width: 601px) and (max-width:1024px){
            bottom:${prop=>prop.showLabel?"55px":"20px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:1.2em;
            height:${prop=>prop.showLabel?"15px":"30px"};
            left:${prop=>prop.showLabel?"20px":"10px"};
            background-color:${prop=>prop.theme.backgroundColor};
            z-index:${prop=>prop.showLabel?5:1};
            width:120px;
            justify-content:center;
            border-radius:10px;
        }
        @media screen and (min-width: 0px) and (max-width:600px){
            bottom:${prop=>prop.showLabel?"75px":"15px"};
            color:${prop=>prop.showLabel?`${prop.theme.border}`:""};
            font-size:1.2em;
            height:30px;
        }
    }
    select{
        border:none;
        margin-top:5px;
        background-color:transparent;
        padding:5px;
        width:100%;
        height:45px;
        color:${prop=>prop.theme.color};
        font-size:${prop=>prop.showLabel?"1em":"0px"};
        
        @media screen and (min-width: 1025px) and (max-width:20000px){
            ${prop=>prop.isTouch && prop.isValid === true?`border:2px solid ${prop.theme.border}`:`border:2px solid gray`};
            :hover{
            border:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            height:60px;
            border-radius:5px;

        }
        @media screen and (min-width: 601px) and (max-width:1024px){
             ${prop=>prop.isTouch && prop.isValid === true?`border:2px solid ${prop.theme.border}`:`border:2px solid gray`};
            :hover{
            border:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            height:60px;
            border-radius:5px;

        }
        @media screen and (min-width: 0px) and (max-width:600px){
            ${prop=>prop.isTouch && prop.isValid === true?`border-bottom:2px solid ${prop.theme.border}`:`border-bottom:2px solid gray`};
            :hover{
             border-bottom:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
            }
            height:35px;

        }
    }
`
export const MessageErroForm = styled.span`
    display:flex;
    align-items:center;
    padding:5px;
    position:absolute;
    margin-top:60px;
    transition:0.8s;
    background-color:#ff7474;
    color:#ffff;
    font-size:1.2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:10px;
    z-index:5;
    
    @media screen and (min-width: 1025px) and (max-width:20000px){
        width:50%;
        left:5px;
        height:45px;
    }
    @media screen and (min-width: 601px) and (max-width:1024px){
        width:60%;
        left:5px;
        height:45px;
    }
    @media screen and (min-width: 0px) and (max-width:600px){
        width:100%;
        height:35px;
    }
`

export const OptionSelect  = styled.option`
    cursor: pointer;
   font-weight: 400;
   line-height: 22px; /* altura das options */
   min-height: 22px; /* este valor deve ser o mesmo do acima */
   list-style: none;
   outline: none;
   padding-left: 18px;
   padding-right: 29px;
   text-align: left;
   -webkit-transition: all 0.2s;
   transition: all 0.2s;
   `