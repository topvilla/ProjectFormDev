import styled from 'styled-components';


export const FormV8 = styled.form`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    display:flex;
    flex-flow:column;
    padding:10px;
    overflow:hidden;
    font-family: 'Roboto', sans-serif;
    padding-bottom:100px;
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
        color:${prop=>prop.showLabel?"royalblue":"gray"};

        font-size:1.2em;
        flex:1;
        transition:.5s;
        z-index:1;
    }
    input{
        border:none;
        border-bottom:1px solid gray;
        padding:5px;
        width:100%;
        height:35px;
        margin-bottom:5px;
        z-index:2;
        background-color:transparent;
        font-size:${prop=>prop.showLabel?"1em":"0px"};
        :hover{
            border-bottom:3px solid royalblue;
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
        color:${prop=>prop.showLabel?"royalblue":"gray"};

        font-size:1.2em;
        flex:1;
        transition:.5s;
        z-index:1;
    }
    select{
        border:none;
        border-bottom:1px solid gray;
        margin-top:5px;

        padding:5px;
        width:100%;
        height:45px;
        font-size:${prop=>prop.showLabel?"1em":"0px"};
        :hover{
            border-bottom:2px solid royalblue;
        }
    }
`
export const MessageErroForm = styled.span`
    width:100%;
    height:35px;
    display:flex;
    align-items:center;
    padding:5px;
    position:absolute;
    margin-top:60px;
    transition:0.5s;
    background-color:#ff7474;
    color:#ffff;
    font-size:1.2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:10px;
    z-index:5;
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