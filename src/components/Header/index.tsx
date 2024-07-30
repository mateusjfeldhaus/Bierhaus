import { useState } from "react";
import { StyledMenuButton, StyledNavMenu, StyledHeader } from "./style";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          alt="Bierhaus Logo"
        />
      </Link>
      <div>
        <StyledMenuButton onClick={toggleMenu}>☰</StyledMenuButton>
        <StyledNavMenu isOpen={isMenuOpen}>
          <ul>
            <li>
              <Link to="/cachaca">Cachaça</Link>
            </li>
            <li>
              <Link to="/espumante">Espumante</Link>
            </li>
            <li>
              <Link to="/gin">Gin</Link>
            </li>
            <li>
              <Link to="/licor">Licores</Link>
            </li>
            <li>
              <Link to="/alkoholfrei">Não Alcoólicos</Link>
            </li>
            <li>
              <Link to="rum">Rum</Link>
            </li>
            <li>
              <Link to="sake">Sake</Link>
            </li>
            <li>
              <Link to="tequila">Tequila</Link>
            </li>
            <li>
              <Link to="vodka">Vodka</Link>
            </li>
            <li>
              <Link to="whisky">Whisky</Link>
            </li>
          </ul>
        </StyledNavMenu>
      </div>
    </StyledHeader>
  );
};
