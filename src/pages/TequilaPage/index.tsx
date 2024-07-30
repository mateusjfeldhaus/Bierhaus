import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { StyledTequilaPage } from "./style";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const TequilaPage = () => {
  const { tequilaList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Originária do México, a tequila é destilada da planta de agave azul.
          Conhecida por sua força e sabor distintivo, é a base do famoso
          margarita e outros coquetéis vibrantes.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={tequilaList} />
    </>
  );
};
