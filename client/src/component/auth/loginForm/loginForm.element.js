import styled from "styled-components";
import { Container } from "../../../globalCss";

export const Wrapper = styled.div`
    border:3px solid #ced4da;
    background-color:#fff;
    width:50%;
    margin-top:30px;
    @media screen and (max-width:960px){
        width:100%;
    }
`
export const Form = styled.form`
    margin:60px 30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    > *:not(:first-child) {
        margin-top:20px
    }
`
export const StyledContainer = styled(Container)`
    display:flex;
    justify-content:center;
    align-items:center;
     padding-bottom:100px;
    
`;