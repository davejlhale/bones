import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    border: 2px solid #7b7f82;
    box-shadow: 0px 15px 10px -15px #111;
    min-width: 0; /* NEW */
`;

export const CurrencyBox = styled.div`
    display:flex;
    padding:10px;
    text-align: left;
    width:100%;
    border-right: 2px solid #7b7f82;
    min-width: 0; /* NEW */
    
    &:last-child {
        border-right: none;
    }
    .Logo{
        height:40px;
    }
`;

export const CurrencyValue = styled.div`
margin-left:10px;
flex: 1 0 21%;
  
`;