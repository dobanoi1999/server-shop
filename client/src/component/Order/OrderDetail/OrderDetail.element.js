import { Container } from "globalCss";
import styled from "styled-components";

export const DetailContainer = styled(Container)`
    background-color:#eff0f5;
    margin-top:50px;
    padding:50px 20px;
    h2{
        font-size:1.2rem;
        font-weight:600;
    }
`
export const OrderDetail = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 20px;
    margin:20px 0;
    background-color:#fff;

`
export const OrderId = styled.div`
    display:flex;
    flex-direction:column;
    
`
export const ListProduct = styled.ul`
background-color:#fff;
margin:20px 0;
list-style:none;
padding:20px;
    
`
export const Product = styled.li`
display:flex;
justify-content:space-around;
margin-bottom:20px;
img{
    width:80px;
    height:100px;
    display:block;
    object-fit:cover;
}
`
export const Address = styled.div`
    background-color:#fff;
    padding:20px;
`
export const Status = styled.div`
display:flex;
justify-content:flex-end;
margin-bottom:10px ;
    p{
        background-color:#ecf0f7;
        padding:5px 10px;
        border-radius:25%;
    }

`