import { Container } from "globalCss";
import styled from "styled-components";

export const ContainerOver = styled(Container)`
    display:flex;
    padding-top:50px;
  justify-content:center;

`
export const StyledWrapper = styled.div`
    width:50%;
    padding:10px 20px;
    @media screen and (max-width:960px){
        width:100%;
    }
`
export const ListCategory = styled.ul`
    list-style:none;
    width:100%;
    @media screen and (max-width:960px){
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
`
export const CategoryName = styled.p`
    flex:1;
  font-size:1.5rem;
    width:40%;
    border:1px solid #000;
    margin-right:15px;
    padding:0 20px;
    

`
export const CategoryItem = styled.li`
    display:flex;
    margin-bottom:20px;
    @media screen and (max-width:960px){
        width:100%;
        justify-content:space-around;
    }
    
`
export const FormCreate = styled.div`
    display:flex;
    flex-direction:row; 
    margin-bottom:20px;
    @media screen and (max-width:960px){
        width:100%;
        justify-content:space-around;
    }


`
export const Input = styled.input`
    text-align:start;
`
export const Button = styled.button`
    :disabled{
        background-color:#ced4da;
    };
    width:20%;
    font-size:1rem;
    margin-left:10px;
    background-color:${props => props.bgColor || "#007bff"};
    :active{
        background-color:${props => props.bgColor ? "#b02a37" : "#0062cc"}
    };

`