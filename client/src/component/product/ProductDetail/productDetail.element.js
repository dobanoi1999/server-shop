import styled from "styled-components";
import { Container } from "../../../globalCss";

export const DetailProduct = styled(Container)`

   padding:50px 20px;
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
    padding:0 100px;
    >*{
        margin-bottom:20px
    }
    @media screen and (max-width:960px){
        align-items:center;
        padding:0;
    }
`
export const Name = styled.p`
    color:#0a043c;
    font-size:3rem;
    text-transform:capitalize;
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

export const Image = styled.div`
    width:50%;
    height: 400px;
    @media screen and (max-width:960px){
        width:100%;
    }
    img{
        width:75%;
        height:100%;
        margin-left:auto;
        margin-right:auto;
        display:block;
        object-fit:cover;
    }
`

export const Related = styled(Container)`
    display:flex;
    overflow: hidden;
    flex-wrap:nowrap;
    overflow-x:auto;
   
`
export const Wrapper = styled.div`
    display:flex;
    
`
export const WrapperQuantity = styled.div`
    display:flex;
    button{
        padding:0 20px;
        font-size:1.5rem;
        font-weight:bold;
        :hover{
            background-color:rgba(33,33,33);
            color:#fff;
            cursor:pointer;
            
        }
    }
    input{
        max-width:50%;
        :focus {
            border:none;
        }
        
    }
`