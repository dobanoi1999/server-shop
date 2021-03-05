import styled from "styled-components";

export const CartItems = styled.tr`  

    width:100%; 
 td{
    
     text-align:center;
 }
`
export const Image = styled.img`
    width:80px;
    height:100px;
    object-fit:cover;
    overflow:hidden;
`
export const Title = styled.p`
    overflow:hidden;
`
export const Price = styled.span`
color:red;

`
export const NumberItem = styled.div`
    
    width:50%;
    display:flex;
    border:1px solid #000;
    transform:translate(50%)
`
export const IncreaseBtn = styled.button`
    border-radius:none;
    background-color:#fff;
    color:#000;
    
    font-size:1.3rem;
    font-weight:bold;
    cursor: pointer;
    padding:0 15px;
   :active{
       background-color:#f1f2f3;
   }
`
export const Count = styled.p`
    padding:0 10px;
    font-size:1.5rem;
    border-left:1px solid #000;
    border-right:1px solid #000;
   
  `
export const DecreaseBtn = styled(IncreaseBtn)``
export const BtnDelete = styled.button`
    width:60px;
    font-size:1rem;
    background-color:#dc3545;
    :active{
        background-color:#b02a37;
    };
`