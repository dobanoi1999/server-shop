import { Container } from "globalCss";
import styled from "styled-components";

export const ListCart = styled(Container)`
    position:relative;
    display:flex;
    flex-direction:column;
    padding:50px 0;
    
    @media screen and (max-width:960px){
        overflow-x:auto;
        padding-bottom:0;
    }
`

export const Table = styled.table`
   padding:10px;
`
export const Total = styled.p`
    color:red;
    font-weight:800;
    font-size:1.5rem;
`
export const CheckOutContainer = styled(Container)`

    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-color:#f1f1f1;
    padding:0px 20px;
    transition:all 0.7s ;
        position:sticky;  
        bottom:0;
     @media screen and (max-width:960px){
 
        margin-bottom:10px;
    }

`
export const BtnCheckOut = styled.p`
    border:1px solid;
    text-align:center;
    padding:10px;
    margin-left:20px;
    background-color:#007bff;
    color:#ffffff;
    cursor: pointer;
    border-radius:5px;
    

`