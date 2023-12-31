import styled from "styled-components";


export const Container = styled.div`
    width:90%;
    height:70px;
    display: flex;
    align-items:flex-end;
    border:5px outset #4a0101;
    margin:5px auto;
    border-radius: 5px;  
    background-color:red;
    padding:5px;


    P {
        width:150px; 
        text-align: center;
        background-color: red;
        user-select: none;
        border:5px solid #4a0101;
        border-radius: 5px;
        height:100%;
        line-height: 35px; //half the parent height
    
    }

    .barWrapper { 
        
        display: flex;
        flex-grow: 1; 
        height:100%;// Fill remaining space
        min-width: 0; // Don't use more space than available
        /* background-image: linear-gradient(to right, red , #c42d2d); */
      
 
    }

    .barContainer {
        height:70%;
        flex-grow: 1;
        margin:auto 10px;
        background-color:white;
        border:2px outset #333;
        border-radius: 5px;
        
    }

    .bar {
        background-color: green;
        margin:auto 0px; 
        height:100%; //same as height
        transition: linear  1s ;
        background-image: linear-gradient(#4cf041, #23f016, #4cf041); 
        border-radius: 2px; 
    }

`;