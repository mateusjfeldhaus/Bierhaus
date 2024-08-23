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
          <p>
            Ingredientes:{" "}
            {drink.ingredients
              .map((ingredient) => {
                if (ingredient.name === "Hortelã") {
                  return `${ingredient.quantity} folhas de ${ingredient.name}`;
                } else if (ingredient.quantity === "Completar") {
                  return `Completar com ${ingredient.name}`;
                } else if (ingredient.name === "Angostura") {
                  return `${ingredient.quantity} dashes de ${ingredient.name}`;
                } else if (ingredient.name.includes("Redbull")) {
                  return `${ingredient.quantity} Lata de ${ingredient.name}`;
                } else if (ingredient.name === "Clara de Ovo") {
                  return `${ingredient.quantity} ${ingredient.name}`;
                } else if (ingredient.name === "Pimenta Rosa") {
                  return `${ingredient.quantity} de ${ingredient.name}`;
                } else if (ingredient.name === "Bitter de Laranja") {
                  return `${ingredient.quantity} dashes de ${ingredient.name}`;
                } else if (ingredient.name === "Limão") {
                  return `Suco de ${ingredient.quantity} ${ingredient.name}`;
                } else {
                  return `${ingredient.quantity} mL de ${ingredient.name}`;
                }
              })
              .join(", ") + "."}
          </p>
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
