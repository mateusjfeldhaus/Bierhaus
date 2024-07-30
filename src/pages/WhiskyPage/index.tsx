import React, { useContext } from "react";
import { DrinkContext } from "../../providers/drinksContext";
import { StyledDrinkList } from "../../styles/DrinkList";
import { DrinkList } from "../../components/DrinkList";

export const WhiskyPage = () => {
  const { whiskyList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          Um destilado envelhecido, o whisky vem em muitas variedades, cada uma
          com seu perfil de sabor único. É apreciado puro, com gelo ou como base
          de coquetéis robustos.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={whiskyList} />
    </>
  );
};
