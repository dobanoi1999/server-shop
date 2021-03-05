import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalCss";

export const HeaderContainer = styled(Container)`
max-width: 100%;
    z-index:2;
    margin-bottom:0;
    background-color:#5f5f5f;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 20px;
   
    
   > :last-child{
        border:none;
    }
    position:sticky;  
    transition:all 0.7s ;
    top:0;
    
`
export const CompanyName = styled(Link)`
    text-decoration:none;
    color:#f1f1f1 !important;

    cursor: pointer;
    color:#0a58ca;
    font-size:3rem;
    @media screen and (max-width:960px){
        display:none;
    }
    
    

`
export const MobileIcon = styled.div`
display:none;
    @media screen and (max-width:960px){
       
        display:block;
        
       cursor: pointer;
       &>*{
        font-size:2rem;
       }
    }
`
export const Search = styled.div`
    display:flex;
    flex:1;
    padding:0 50px;
`
export const StyledRouter = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;

    @media screen and (max-width:960px){
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        width:100%;
        height:90vh;
        opacity:1;
        transition:all 0.5s ease;
        background-color:#5f5f5f;
        position:absolute;
        top:80px;
        left:${({ click }) => click ? 0 : "-100%"}
    }
`
export const SearchInput = styled.input`
    flex:1;
    border:1px solid #ced4da;
    text-align:start;
    padding-left:5px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
`
export const StyledItem = styled.li`
    height:80px;
    border-bottom:2px solid transparent;
    &:hover{
        border-bottom:2px solid #4b59f7;
    }
   
`

export const Route = styled(Link)`
    height:100%;
    text-transform:uppercase;
    text-decoration:none;
    color:#fff;
    display:flex;
    align-items:center;
    padding:0.5rem 1rem;
`