import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  margin: 1rem;

  display: flex;
  align-items: center;

  width: 100%;

  img {
    width: 250px;
    height: 250px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 100vw;
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
