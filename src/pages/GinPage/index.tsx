import React, { useContext } from "react";
import { DrinkList } from "../../components/DrinkList";
import { DrinkContext } from "../../providers/drinksContext";
import { StyledDrinkList } from "../../styles/DrinkList";

export const GinPage = () => {
  const { ginList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Um destilado aromatizado com zimbro e uma variedade de botânicos, o
          gin é conhecido por sua complexidade e versatilidade em coquetéis
          clássicos como o gin tonic.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={ginList} />
    </>
  );
};
