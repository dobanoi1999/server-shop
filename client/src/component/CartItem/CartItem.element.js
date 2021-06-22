import styled from "styled-components";

export const CartItems = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:stretch;
  padding:10px 10px;
  border:1px solid #000000;
  border-radius:5px;
  box-shadow:0 3px 6px rgba(0,0,0,0.12);
  margin-bottom:20px;
`;
export const Image = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    width:100px;
    height:120px;
    object-fit:cover;
    overflow:hidden;

  }
`;

export const Price = styled.div`
   display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;
export const NumberItem = styled.div`
  display:flex;
  border:1px solid #000;
  width:fit-content;
  margin:auto;
 border-radius:4px;
`;
export const IncreaseBtn = styled.button`
  border:0 ;
  border-radius:0;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0 15px;
  background-color: #ffffff;
  :hover{
    background-color:#333333;
    color:#ffffff;
  }
  transition: all 300ms ease-in-out;
  
`;
export const Count = styled.p`
  padding: 0 10px;
  font-size: 1.5rem;
  border-right:1px solid #000000;
  border-left:1px solid #000000;
  
`;
export const DecreaseBtn = styled(IncreaseBtn)``;
export const BtnDelete = styled.button`
  width: 60px;
  font-size: 1rem;
  background-color: #dc3545;
  color:#fff;
  
  :active {
    background-color: #b02a37;
  }
`;
