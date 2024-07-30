import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const AlokoholfreiPage = () => {
  const { alkoholfreiList, filterDrinksByIngredient } =
    useContext(DrinkContext);

  // console.log(filterDrinksByIngredient(alkoholfreiList, "Limão"));

  return (
    <>
      <StyledDrinkList>
        <p>
          Opções refrescantes e saborosas para quem prefere ou precisa evitar
          álcool, esses drinks são elaborados com ingredientes não alcoólicos
          sem perder a complexidade e sabor.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={alkoholfreiList} />
    </>
  );
};
