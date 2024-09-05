import { useLocation, useNavigate } from "react-router-dom";
import { NavButton, StyledFooter } from "./style";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/cachaca", label: "Cachaça" },
    { path: "/espumante", label: "Espumante" },
    { path: "/gin", label: "Gin" },
    { path: "/licor", label: "Licores" },
    { path: "/alkoholfrei", label: "Não Alcoólicos" },
    { path: "/rum", label: "Rum" },
    { path: "/sake", label: "Sake" },
    { path: "/tequila", label: "Tequila" },
    { path: "/vodka", label: "Vodka" },
    { path: "/whisky", label: "Whisky" },
    { path: "/utils", label: "Utils" },
  ];

  const currentIndex = menuItems.findIndex(
    (item) => item.path === location.pathname
  );

  const handleNext = () => {
    if (currentIndex === menuItems.length - 1) {
      navigate(menuItems[0].path);
    } else {
      navigate(menuItems[currentIndex + 1].path);
    }
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      navigate(menuItems[menuItems.length - 1].path);
    } else {
      navigate(menuItems[currentIndex - 1].path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <StyledFooter>
      <NavButton onClick={handlePrevious}>
        {currentIndex === 0
          ? menuItems[menuItems.length - 1].label
          : menuItems[currentIndex - 1].label}
      </NavButton>
      <NavButton onClick={handleNext}>
        {currentIndex === menuItems.length - 1
          ? menuItems[0].label
          : menuItems[currentIndex + 1].label}
      </NavButton>
    </StyledFooter>
  );
};
