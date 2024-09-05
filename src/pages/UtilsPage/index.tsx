import React, { useContext, useState } from "react";
import { drinksDatabase } from "../../database/database";
import {
  FilterDrinksByIngredientForm,
  IFilterDrinksByIngredientFormProps,
} from "../../components/Form/FilterDrinksByIngredientForm";
import { DrinkContext, IDrink } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";

export const UtilsPage = () => {
  const allDrinks = drinksDatabase;
  const [filteredDrinksByIngredient, setFilteredDrinksByIngredient] = useState<
    IDrink[]
  >([]);
  const { filterDrinksByIngredient } = useContext(DrinkContext);

  return (
    <>
      <FilterDrinksByIngredientForm
        submitFunction={(
          data: IFilterDrinksByIngredientFormProps,
          reset: () => void
        ) => {
          setFilteredDrinksByIngredient(
            filterDrinksByIngredient(allDrinks, data.ingredient)
          );
          reset();
        }}
      />
      <DrinkList drinks={filteredDrinksByIngredient} />
    </>
  );
};
