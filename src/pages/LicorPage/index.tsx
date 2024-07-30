import React, { useContext } from "react";
import { DrinkList } from "../../components/DrinkList";
import { DrinkContext } from "../../providers/drinksContext";
import { StyledDrinkList } from "../../styles/DrinkList";

export const LicorPage = () => {
  const { licoresList } = useContext(DrinkContext);

  return (
    <>
      <StyledDrinkList>
        <p>
          <span>Aperol:</span> Um licor italiano de cor vibrante, o Aperol é
          amargo e doce ao mesmo tempo. É o ingrediente chave no famoso Aperol
          Spritz, um símbolo do verão europeu.
        </p>
        <p>
          <span>Martini:</span> Um clássico entre os coquetéis, o Martini pode
          ser feito de diversas maneiras, mas é geralmente associado ao gin ou
          vodka e vermute. Elegante e sofisticado.
        </p>
        <p>
          <span> Licor 43:</span> O Licor 43 é uma bebida espanhola única, feita
          com uma mistura de 43 ingredientes naturais que incluem baunilha,
          cítricos e especiarias. Com um teor alcoólico de 31%, é apreciado por
          seu sabor doce e picante, ideal para ser consumido puro ou em
          coquetéis sofisticados. Popular globalmente, é conhecido por sua
          versatilidade e capacidade de transformar qualquer ocasião em uma
          experiência memorável.
        </p>
      </StyledDrinkList>

      <DrinkList drinks={licoresList} />
    </>
  );
};
