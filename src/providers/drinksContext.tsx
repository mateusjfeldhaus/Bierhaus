import { ReactNode, createContext } from "react";
import { drinksDatabase } from "../database/database";

export interface IDrink {
  name: string;
  type: string[];
  ingredients: string[];
  recipe: string;
  img: string[];
  hidden: boolean;
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
  sumOfIngredients: (drinks: IDrink[]) => Record<string, number>;
  filterDrinksByIngredient: (drinks: IDrink[], ingredient: string) => IDrink[];
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

  // Método Antigo, quando o type era uma string e não um array
  // const espumanteList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Espumante");
  // });

  const espumanteList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Espumante");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const ginList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Gin");
  // });

  const ginList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Gin");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const licoresList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Licores");
  // });

  const licoresList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Licores");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const alkoholfreiList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Não Alcoólicos");
  // });

  const alkoholfreiList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Não Alcoólicos");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const rumList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Rum");
  // });

  const rumList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Rum");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const sakeList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Sake");
  // });

  const sakeList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Sake");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const tequilaList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Tequila");
  // });

  const tequilaList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Tequila");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const vodkaList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Vodka");
  // });

  const vodkaList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Vodka");
  });

  // Método Antigo, quando o type era uma string e não um array
  // const whiskyList: IDrink[] = drinksDatabase.filter((drink) => {
  //   return drink.type.map((drinkType) => drinkType === "Whisky");
  // });

  const whiskyList: IDrink[] = drinksDatabase.filter((drink: IDrink) => {
    return drink.type.includes("Whisky");
  });

  const sumOfIngredients = (drinks: IDrink[]): Record<string, number> => {
    const ingredientTotals: Record<string, number> = {};

    drinks.forEach((drink: any) => {
      drink.ingredients.forEach((ingredient: any) => {
        const [amount, ...nameParts] = ingredient.split(" ");
        const name = nameParts.join(" ");

        const numericAmount = parseFloat(amount);
        const unit = nameParts.length > 1 ? nameParts[0] : "";

        const ingredientName = unit ? name.split(" ").slice(1).join(" ") : name;

        // Mostrar a Unidade
        // const ingredientName = unit
        //   ? `${unit} ${name.split(" ").slice(1).join(" ")}`
        //   : name;

        if (!ingredientTotals[ingredientName]) {
          ingredientTotals[ingredientName] = 0;
        }

        ingredientTotals[ingredientName] += numericAmount;
      });
    });

    return ingredientTotals;
  };

  const filterDrinksByIngredient = (
    drinks: IDrink[],
    ingredient: string
  ): IDrink[] => {
    return drinks.filter((drink) =>
      drink.ingredients.some((element) =>
        element.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
  };

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
