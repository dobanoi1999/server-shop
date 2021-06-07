import styled from "styled-components";

export const CartItems = styled.tr`
 
  
  td {
    vertical-align: middle;
    text-align: center;
  }
`;
export const Image = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  overflow: hidden;
  display:block;
  border-radius:5px;
`;
export const Title = styled.p`
  overflow: hidden;
`;
export const Price = styled.span`
  color: red;
`;
export const NumberItem = styled.div`
  display:flex;
  border:1px solid #000;
  width:fit-content;
 margin:auto;
 border-radius:4px;
`;
export const IncreaseBtn = styled.button`
  border-radius: none;
  background-color:rgba(107, 114, 128);
  color: #fff;
  
  
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0 15px;
  :active {
    background-color: #f1f2f3;
  }
  :disabled{
    opacity:0.3;
  }
`;
export const Count = styled.p`
  padding: 0 10px;
  font-size: 1.5rem;
  
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
