// Navbar.js 
import Media from "react-media";
import "../../components/NavMenu/navStyles.css"
import { NavLink, Nav } from "./NavbarElements";
import { useState } from "react";
// Navbar.js
export default function NavMenu({ loggedInUser, recipe }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const hamburgerDisplay = () => {
    return (<button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>);
  }

  const menuDisplay = () => {
    return (
      <>

        <NavLink to="/DoggoLand" onClick={() => {
          setIsNavExpanded(false);
        }}>DoggoLand</NavLink>

        <NavLink onClick={() => {
          setIsNavExpanded(false);
        }} to="/Regions">Regions</NavLink>

        <NavLink onClick={() => {
          setIsNavExpanded(false);
        }} to="/Market" >Market</NavLink>

        <NavLink onClick={() => {
          setIsNavExpanded(false);
        }} to="/Staff" >Staff</NavLink>

        <NavLink onClick={() => {
          setIsNavExpanded(false);
        }} to="/" >Profile</NavLink>

      </>
    )
  }
  return (
    <Nav >

      <Media query={{ minWidth: 620 }}>
        {matches =>
          matches ? menuDisplay() : isNavExpanded ? menuDisplay() : hamburgerDisplay()}
      </Media>










    </Nav >
  );
}