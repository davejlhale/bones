import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    background: antiquewhite;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;  
    width:100%;
    @media (max-width: 600px) {
    flex-direction: column;
  }
    `

export const NavLink = styled(Link)`
    color: #333;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    background-color:antiquewhite;
    justify-content: center;
    flex: 1;

    transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
        background: linear-gradient(0deg, rgb(194, 251, 215), rgb(231, 253, 239), rgb(230, 241, 236));
    }
   
`




