import React, { useContext } from "react";
import { StyledDrinkList } from "../../styles/DrinkList";
import { drinksDatabase } from "../../database/database";
import { DrinkList } from "../../components/DrinkList";
import { DrinkContext } from "../../providers/drinksContext";

export const HomePage = () => {
  const { sumOfIngredients, filterDrinksByIngredient } =
    useContext(DrinkContext);

  // console.log(sumOfIngredients(drinksDatabase));
  // console.log(filterDrinksByIngredient(drinksDatabase, "limão siciliano"));
  // console.log(filterDrinksByIngredient(drinksDatabase, "Dry Vermouth"));

  return (
    <>
      <StyledDrinkList>
        <p>
          Aqui estão todos os drinks disponíveis na Bierhaus. Escolha a
          categoria individual no menu.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={drinksDatabase} />
    </>
  );
};
