import React from "react";
import { StyledDrinkCard } from "./style";
import { IDrink } from "../../../providers/drinksContext";

export const DrinkCard = ({ drinks }: { drinks: IDrink[] }) => {
  const drinksToShow = drinks.filter((drink) => !drink.hidden);

  return (
    <StyledDrinkCard>
      {drinksToShow.map((drink) => (
        <div key={drink.name}>
          <h2>{drink.name}</h2>
          <p>Ingredientes: {drink.ingredients.join(", ")}</p>
          <p>Modo de preparo: {drink.recipe}</p>
          <div className="images">
            {drink.img.map((img, index) => (
              <img key={index} src={img} alt={drink.name} />
            ))}
          </div>
        </div>
      ))}
    </StyledDrinkCard>
  );
};
