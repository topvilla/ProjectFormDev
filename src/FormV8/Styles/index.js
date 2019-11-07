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
        height:30px;
        display:flex;
        align-items:center;
        padding:5px;
        /* background-color:green; */
        position: absolute;
        bottom:${prop=>prop.showLabel?"75px":"15px"};
        color:${prop=>prop.showLabel?`${prop.theme.border}`:""};

        font-size:1.2em;
        flex:1;
        transition:.5s;
        z-index:1;
    }
    input{
        border:none;
        padding:5px;
        width:100%;
        height:35px;
        color:${prop=>prop.theme.color};
        margin-bottom:5px;
        z-index:2;
        background-color:transparent;
        border-bottom:solid 1px gray;
        font-size:${prop=>prop.showLabel?"1em":"0px"};
        :hover{
            border-bottom:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
        }
    }
  
    
`
export const SelectContainer = styled(InputContainer)`
    
    label{
        width:100%;
        height:30px;
        display:flex;
        align-items:center;
        padding:5px;
        /* background-color:green; */
        position: absolute;
        bottom:${prop=>prop.showLabel?"75px":"15px"};
        color:${prop=>prop.showLabel?`${prop.theme.border}`:""};

        font-size:1.2em;
        flex:1;
        transition:.5s;
        z-index:1;
    }
    select{
        border:none;
        border-bottom:1px solid gray;
        margin-top:5px;
        background-color:transparent;
        padding:5px;
        width:100%;
        height:45px;
        color:${prop=>prop.theme.color};

        font-size:${prop=>prop.showLabel?"1em":"0px"};
        :hover{
            border-bottom:${prop=>prop.isTouch && prop.isValid === false?"2px solid #ff7474":`2px solid ${prop.theme.border}`};
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