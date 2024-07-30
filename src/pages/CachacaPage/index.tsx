import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { DrinkList } from "../../components/DrinkList";
import { StyledDrinkList } from "../../styles/DrinkList";

export const CachacaPage = () => {
  const { cachacaList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          A cachaça é uma bebida tradicional brasileira, destilada a partir do
          caldo de cana-de-açúcar. Conhecida por sua versatilidade, é
          frequentemente usada em coquetéis tropicais e caipirinhas.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={cachacaList} />
    </>
  );
};
