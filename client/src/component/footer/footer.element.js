import styled from "styled-components";

export const Footer = styled.footer`
    background-color:#5f5f5f;
    color:white;
    margin-top:60px;
    
    bottom:0;
    left:0;
`
export const Container = styled.div`
    padding:10px;
    display:flex;
   
    flex-direction:row;
    div{
        max-width:50%;
    }
    @media screen and (max-width:960px){
        padding:30px;
        
        flex-direction:column;
       
        div{
            max-width:100%;
        }
           
    }
    
    justify-content:space-between;
`
export const Contact = styled.div`
    max-width:50%;
    

`
export const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
   
    div{
        padding:5px 5px;
        background-color:#231E23;
        border-radius:50%;
        border:1px solid #ffffff;
        margin-right:10px;
    }
    p{
        :hover{
            color:#1261e0;
            cursor: pointer;
        }
    }
`
export const About = styled.div`
    *{
        margin-top:10px;
    }
    p{
        font-size:1.2rem;
    }
    span{
        opacity:0.7;
    }
    div{
        display:flex;
        a{
                padding:10px;
                border-radius:5px;
                border:1px solid #ffffff;
                width:fit-content;
                margin-left:10px;
                background-color:#231E23;
                :hover{
                    cursor: pointer;
                    opacity:0.7;
                }
        }
    }
`