import styled, { keyframes } from "styled-components";
import { Container } from "../../../globalCss";
export const Fade = keyframes`
   
    from { opacity: 0; }
    to   { opacity: 1; }

`

export const Form = styled.form`
    
   background-color:#ffffff;
   width:50%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    max-height:calc(100% - 140px);
    height:100%;
    padding:20px 10px;
    overflow-y:auto;
    border-radius:0.5rem;
    > *:not(:first-child) {
        margin-top:20px
    }
    span{
        text-decoration:underline;
        color:#000000;
        font-weight:bold;
        :hover{
            cursor: pointer;
            color:blueviolet;
        }
    }
    animation: ${Fade} 700ms ease-in-out ;
    @media screen and (max-width:960px){
        width:100%;
    }
`
