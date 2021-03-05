

import { Container } from "globalCss"
import styled from "styled-components"



export const Container2 = styled(Container)`
   
    display:flex;
    align-items:center;
    flex-direction:column;
    
    
    
`
export const Title = styled.h2`
    font-size:200%;
    font-weight:bold;
    margin:20px 0;
`
export const Form = styled.form`
width:50%;
padding:20px 10px;
border:1px solid #ced4da;
@media screen and (max-width:960px){
        width:100%;
    }

`
export const Label = styled.label`
margin-bottom:20px;
font-size:1.2rem;
`
export const Input = styled.input`
text-align:start;
margin-bottom:10px;

`
export const Select = styled.select`
   
    margin-bottom:10px;
    margin-left:20px;
    padding:5px 0;
    border:1px solid #000;
`


export const Option = styled.option`
   font-size:1.2rem;
`
export const BtnGroup = styled.div`
    display :flex;
`
export const BtnCancel = styled.button`
   background-color:red;
   color:#fff;
   margin-left:30px;
`
