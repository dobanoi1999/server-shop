import { Container } from "globalCss";
import styled, { keyframes } from "styled-components";

const Fade2 = keyframes`
    from{
        transform:translateX(100%)
    }
    to{
        transform:translateX(0%)
    }
`
export const ListCart = styled.div`
    position:absolute;
    top:0;
    right:0;
    background:#ffffff;
    padding-top:100px; 
     height:100vh;
     overflow-y:auto;
     width:450px;
     box-shadow: -2px 0 8px rgb(0 0 0 / 15%);
     display:flex;
     flex-direction:column;
     justify-content:space-between;
    @media screen and (max-width:960px){
        width:100%;
       
        height:100%;
    }
    animation : ${Fade2} 700ms  ease-in-out;
`

export const Table = styled.div`
   padding:10px;
`
export const Total = styled.p`
    color:red;
    font-weight:800;
    font-size:1.5rem;
`
export const CheckOutContainer = styled.button`
   
    background-color:#333333;
    color:#ffffff;
    padding:20px 20px;
    transition:opacity 0.7s ;
    margin-top:auto;
    cursor: pointer;
    width:100%;
    
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
    
    p{
        flex:1;
        margin-right:10px;
        border-right:0.5px solid #ffffff;
        font-size:1.5rem;
        font-weight:bold;
        line-height:1.5rem;
    }
    :hover{
        opacity:0.7;
    }
`
