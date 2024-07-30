import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const RumPage = () => {
  const { rumList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Originário do Caribe, o rum é feito da cana-de-açúcar e pode variar de
          leve e suave a rico e robusto. É a base de muitos coquetéis clássicos,
          como o daiquiri e o mojito.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={rumList} />
    </>
  );
};
