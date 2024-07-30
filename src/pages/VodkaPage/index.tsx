import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { StyledDrinkList } from "../../styles/DrinkList";
import { DrinkList } from "../../components/DrinkList";

export const VodkaPage = () => {
  const { vodkaList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Uma das bebidas destiladas mais populares, a vodka é famosa por sua
          pureza e versatilidade. É a base de muitos coquetéis clássicos e
          modernos em todo o mundo.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={vodkaList} />
    </>
  );
};
