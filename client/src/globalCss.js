import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    font-size:16px;
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:-apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif
}


input,button{
    
    
    border-radius:4px;
    border:none;
    outline:none;
    text-align:center;
   
}




input{
    padding:10px 5px;
    color: black !important;
    background-color:#ced4da;
    width:100%;
    &:focus{ 
    border:3px solid #80bdff;
   
}
}

`;
export const Container = styled.div`
  z-index: 1;

  width: 100%;
  max-width: 1300px;

  margin-right: auto;
  margin-left: auto;

  padding-right: 50px;
  padding-left: 50px;
  margin-bottom: 200px;
  @media screen and (max-width: 960px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const Button = styled.button`
       
    margin:0 5px;
       color:#fff;
    cursor: pointer;
    background-color:${({ bgColor }) => {
        if (bgColor === "primary") return "rgba(29, 78, 216)";
        else if (bgColor === "cancel") return "rgba(239, 68, 68)";
        else return bgColor;
    }};
    white-space:nowrap;
    padding:${({ big }) => (big ? "12px 64px" : "10px 20px")};
    font-size:${({ fontBig }) => (fontBig ? "1.5rem" : "1rem")};
    width:${({ block }) => (block ? "100%" : "")};
    &:disabled{
        opacity:.65;
    }
    &:active{
    background-color:${({ bgColor }) => {
        if (bgColor === "primary") return "#2a6bb0";
        else if (bgColor === "cancel") return "#8a3e45";
        else return bgColor;
    }}
    }
    :hover{
        background-color:${({ bgColor }) => {
        if (bgColor === "primary") return "rgba(29, 78, 216, 0.8)";
        else if (bgColor === "cancel") return "rgba(239, 68, 68,0.8)";
        else return bgColor;
    }}
        }
`;

export default GlobalStyle;
