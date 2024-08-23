import { ReactNode, createContext } from "react";
import { drinksDatabase } from "../database/database";

export interface IDrinkIngredients {
  name: string;
  quantity: number | string;
}

export interface IDrink {
  name: string;
  type: string[];
  ingredients: IDrinkIngredients[];
  recipe: string;
  img: string[];
  hidden: boolean;
}

export interface IBevarege {
  name: string;
  price: number;
  quantity: number;
}

export interface IDrinkProviderProps {
  children: React.ReactNode;
}

export interface IDrinkContext {
  cachacaList: IDrink[];
  espumanteList: IDrink[];
  ginList: IDrink[];
  licoresList: IDrink[];
  alkoholfreiList: IDrink[];
  rumList: IDrink[];
  sakeList: IDrink[];
  tequilaList: IDrink[];
  vodkaList: IDrink[];
  whiskyList: IDrink[];
  sumOfIngredients: (database: IDrink[]) => Record<string, number>;
  filterDrinksByIngredient(
    database: IDrink[],
    ingredientName: string
  ): IDrink[];
}

export const DrinkContext = createContext({} as IDrinkContext);

export const DrinkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: IDrinkProviderProps) => {
  // Método Antigo, quando o type era uma string e não um array
  // const cachacaList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Cachaça");
  // });

  const cachacaList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Cachaça");
  });

  const espumanteList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Espumante");
  });

  const ginList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Gin");
  });

  const licoresList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Licores");
  });

  const alkoholfreiList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Não Alcoólicos");
  });

  const rumList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Rum");
  });

  const sakeList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Sake");
  });

  const tequilaList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Tequila");
  });

  const vodkaList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Vodka");
  });

  const whiskyList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Whisky");
  });

  const sumOfIngredients = (database: IDrink[]): Record<string, number> => {
    const ingredientSummary: Record<string, number> = {};

    function parseQuantity(quantity: number | string): number {
      return typeof quantity === "string" ? parseFloat(quantity) : quantity;
    }

    database.forEach((drink) => {
      drink.ingredients.forEach((ingredient) => {
        const quantity = parseQuantity(ingredient.quantity);
        if (ingredientSummary[ingredient.name]) {
          ingredientSummary[ingredient.name] += quantity;
        } else {
          ingredientSummary[ingredient.name] = quantity;
        }
      });
    });

    return ingredientSummary;
  };

  function filterDrinksByIngredient(
    database: IDrink[],
    ingredientName: string
  ): IDrink[] {
    const searchTerm = ingredientName.toLowerCase();

    return database.filter((drink) =>
      drink.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchTerm)
      )
    );
  }

  return (
    <DrinkContext.Provider
      value={{
        cachacaList,
        espumanteList,
        ginList,
        licoresList,
        alkoholfreiList,
        rumList,
        sakeList,
        tequilaList,
        vodkaList,
        whiskyList,
        sumOfIngredients,
        filterDrinksByIngredient,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};
