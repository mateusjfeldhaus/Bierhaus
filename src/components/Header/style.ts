import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  margin: 1rem;
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  img {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 347px) {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }
    li {
      white-space: nowrap;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 250px;
      height: 250px;
    }
    li {
      font-size: 1rem;
    }
  }
`;

export const StyledHeaderControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;  
`;

export const StyledButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledMenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.primary};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavMenu = styled.nav<{ isOpen: boolean }>`
  ul {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};

      &:link,
      &:visited,
      &:hover,
      &:active {
        color: ${theme.colors.primary};
      }
    }
  }
`;

export const StyledSearchButton = styled.button`
  font-size: 1.4rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.primary};  

  @media (min-width: 768px) {
    display: initial;
  }
`;

export const StyledSearchWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  width: 100%;

  form {
    display: flex;
    width: 100%;
  }
`;

export const StyledSearchInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-size: 1rem;
  padding: 4px 8px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.primary};
    opacity: 0.6;
  }
`;