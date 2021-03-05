import { Container } from "globalCss";
import styled from "styled-components";

export const ContainerHistory = styled(Container)`
padding:40px;


`
export const Table = styled.table`
  
    th{

        background-color:darkblue;
        color:#fff;
        padding:10px 0;
    }
    td{
        text-align:center;
        padding :10px 0;
        border:1px solid #ddd;
      
    }
   
    width:100%; 
   
        @media screen and (max-width:960px){
            thead{
                display:none;
            }
            tbody,tr ,td{
                display:block;
                width:100%;
                
            }
            tr{
                margin-bottom:20px; 
                
                 
            }
            td{
                text-align:right;
                padding-right:5px;
                padding-left:50%;
                position:relative;
                &::before{
                    content: attr(data);
                    position:absolute;
                    left:0;
                    text-align:left;
                    padding-left:15px;
                    color:#000;
                    font-weight:bold;
                   
                    
                };
                
            }
           
        }
   
    
   
`

export const Action = styled.td`
   @media screen and (max-width:960px){
       div{
           width:100%;
           display:flex;
           justify-content:flex-end;
           align-items:center;
           
       }
   }
`
export const Status = styled.td`


color:${props => {
        if (props.$status === "cancelled") return "red"
        else if (props.$status === "shipped") return "green"
        return "#0062cc"
    }}
`
