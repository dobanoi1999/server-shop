import styled, { keyframes } from "styled-components";


export const ModalElement = styled.div`

    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:50;
    background-color:rgba(0,0,0,0.7);
    padding:1.5rem;
    @media screen and (max-width:960px){
        padding:0;
    }
   
`
export const ButtonCloseModal = styled.button`
    
        position:fixed;
        top:1rem;
        right:1rem;
        width:2rem;
        height:2rem;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        background-color:#ffffff;
        color:#000000;
        border-radius:9999px;
        z-index:99999;
        :hover{
            color:rgba(0,0,0,0.6);
        }
        transition:all 300ms ease-in-out;
        cursor: pointer;
    
`
export const WrapperForm = styled.div`
    width:100%;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`
