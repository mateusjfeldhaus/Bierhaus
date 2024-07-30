import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const SakePage = () => {
  const { sakeList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          A bebida tradicional japonesa, o sake é um vinho de arroz fermentado.
          Delicado e aromático, é apreciado tanto puro quanto em coquetéis como
          o sake martini.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={sakeList} />
    </>
  );
};
