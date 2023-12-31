import styled from "styled-components";


export const Container = styled.div`
    width:90%;
    height:70px;
    line-height: 70px; //same as height
    display: flex;
    align-items:flex-end;

    P {
        width:150px; 
        text-align: center;
        background-color: red;
        user-select: none;
    }

    .barWrapper { 
        background-image: linear-gradient(to right, red , white);
        flex-grow: 1; 
        height:100%;// Fill remaining space
        min-width: 0; // Don't use more space than available
        margin:auto;
    }

    .barContainer {
       
       border:3px solid red;
        height:100%;
        background-color:white;
    }

    .bar {
        background-color: green;
        margin:0px; 
        height:100%;
        transition: linear  1s    }

`;