import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const EspumantePage = () => {
  const { espumanteList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Celebrado por suas borbulhas refrescantes, o espumante é um vinho com
          gás carbonico natural. Elegante e festivo, é ideal para comemorações e
          momentos especiais.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={espumanteList} />
    </>
  );
};
