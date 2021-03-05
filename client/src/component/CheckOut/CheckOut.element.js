import { Container } from "globalCss";
import styled from "styled-components";

export const CheckOutContainer = styled(Container)`
    padding:50px 0;
    h2{
        font-size:2rem;
        color:green;
        margin-bottom:1rem;
    }

`
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    position:absolute;
    width:50%;
    transform:translate(50%,20%);
   
    select{
        width:50%;
        padding:5px;
    }
    border:1px solid #000000;
    padding :20px 20px;
    >*{
       
        margin-bottom:20px;
    }
    >*~input{
        text-align:start;
        

    }
    @media screen and (max-width:960px){
        width:100%;
        transform:none;
    }
`
export const Head = styled.div`
    display:flex;
    justify-content:space-between;
    
    align-items:center;
`
export const CheckOutBtn = styled.button`
    width:fit-content;
    font-weight:400;
    margin-top:20px;
    margin-right:100px;
    float:right;
`
export const AddressInfor = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

export const Name = styled.p`
    font-weight:600;
    margin-right:20px;
`
export const BtnAdd = styled.button`
    margin-left:20px;
    width:20%;
    padding:0;
`
export const ListItem = styled.table`
    width:100%;
    th{
        text-align:start;
    }
`
export const Total = styled.p`
    font-size:1.7rem;
    font-weight:500;
    padding-right:50px;
`

