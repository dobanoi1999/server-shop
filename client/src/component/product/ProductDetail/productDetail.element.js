import styled from "styled-components";
import { Container } from "../../../globalCss";

export const DetailProduct = styled(Container)`

   padding:50px 200px;
   display:flex;
   
   @media screen and (max-width:960px){
       
       padding:10px 10px;
       flex-direction:column;
       align-items:center;
   }
    
`
export const Detail = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex:1;
    padding-left:100px;
    >*{
        margin-bottom:20px
    }
    @media screen and (max-width:960px){
        align-items:center;
        padding-left:0;
    }
`
export const Name = styled.p`
    color:#0a043c;
    font-size:3rem;
`
export const Desc = styled.p`
     font-size:1.5rem;
     opacity:0.8;
     font-style:italic;
`
export const Price = styled.span`
    font-size:1.3rem;
    color: red;
`

export const Image = styled.img`
    width:40%;
    height: 400px;

    @media screen and (max-width:960px){
        width:60%;
    }
`

export const Related = styled(Container)`
    display:flex;
    overflow: hidden;
    flex-wrap:nowrap;
    overflow-x:auto;
   
`
