import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 1rem;
  z-index: 1000;

  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;

  padding: 0 1rem;
`;

export const NavButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;

  border: none;

  padding: 0.5rem 1rem;

  font-size: 1rem;

  cursor: pointer;
`;
