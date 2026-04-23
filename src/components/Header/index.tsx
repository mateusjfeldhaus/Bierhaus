import { useState } from "react";
import {
  StyledHeader,
  StyledHeaderControls,
  StyledButtonRow,
  StyledMenuButton,
  StyledNavMenu,
  StyledSearchButton,
  StyledSearchWrapper,
  StyledSearchInput,
} from "./style";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          alt="Bierhaus Logo"
        />
      </Link>

      <StyledHeaderControls>
        <StyledButtonRow>
          <StyledSearchButton
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Buscar drink por nome"
          >
            {isSearchOpen ? "✕" : "🔍"}
          </StyledSearchButton>
          <StyledMenuButton onClick={toggleMenu}>☰</StyledMenuButton>
        </StyledButtonRow>

        <StyledSearchWrapper isOpen={isSearchOpen}>
          <form onSubmit={handleSearch}>
            <StyledSearchInput
              type="text"
              placeholder="Buscar drink por nome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
          </form>
        </StyledSearchWrapper>

        <StyledNavMenu isOpen={isMenuOpen}>
          <ul>
            <li><Link to="/cachaca">Cachaça</Link></li>
            <li><Link to="/espumante">Espumante</Link></li>
            <li><Link to="/gin">Gin</Link></li>
            <li><Link to="/licor">Licores</Link></li>
            <li><Link to="/alkoholfrei">Não Alcoólicos</Link></li>
            <li><Link to="/rum">Rum</Link></li>
            <li><Link to="/sake">Sake</Link></li>
            <li><Link to="/tequila">Tequila</Link></li>
            <li><Link to="/vodka">Vodka</Link></li>
            <li><Link to="/whisky">Whisky</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </StyledNavMenu>
      </StyledHeaderControls>
    </StyledHeader>
  );
};