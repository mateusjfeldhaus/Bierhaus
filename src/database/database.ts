import { IDrink } from "../providers/drinksContext";

// {
//   name: "",
//   type: [""],
//   ingredients: [""],
//   recipe: "",
//   img: [""],
//   hidden: false,
// },

export const drinksDatabase: IDrink[] = [
  // Cachaça
  {
    name: "Caipirinha",
    type: ["Cachaça"],
    ingredients: ["100 mL Cachaça", "50 mL Xarope Simples", "1 Limão"],
    recipe:
      "Limão cortado em quartos e levemente amassado para remover o suco. Drink batido servido no Copo Rocks sem coagem.",
    img: ["../../assets/Caipirinha-01.jpg", "../../assets/Caipirinha-02.jpg"],
    hidden: false,
  },
  {
    name: "Rabo de Galo",
    type: ["Cachaça", "Vermouth", "Licores"],
    ingredients: ["50 mL Cachaça", "25 mL Vermouth Rosso", "25 mL Cynar"],
    recipe:
      "Drink montado servido no Copo Rocks com cubo de gelo grande. Finalizado com zest de Limão.",
    img: [
      "../../assets/Rabo de Galo-01.jpg",
      "../../assets/Rabo de Galo-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Brazil 66",
    type: ["Cachaça", "Triple Sec"],
    ingredients: [
      "75 mL Cachaça",
      "25 mL Cointreau",
      "25 mL Suco de Laranja",
      "25 mL Suco de Limão",
      "15 mL Xarope Semi-Rich",
    ],
    recipe:
      "Drink batido servido no Copo Rocks com simples coagem e cubo de gelo grande. Finalizado com Fatia de Limão.",
    img: ["../../assets/Brazil 66-01.jpg", "../../assets/Brazil 66-02.jpg"],
    hidden: true,
  },
  {
    name: "Bombeirinho",
    type: ["Cachaça"],
    ingredients: [
      "50 mL Cachaça",
      "25 mL Suco de Laranja",
      "10 mL Suco de Limão Siciliano",
      "10 mL Suco de Limão",
      "15 mL Monin Groselha/Fambroesa",
    ],
    recipe:
      "Drink batido servido no Copo Longo com cubos de gelo. Finalizado com rodela de limão.",
    img: ["../../assets/Bombeirinho-01.jpg", "../../assets/Bombeirinho-02.jpg"],
    hidden: true,
  },
  // Espumante
  {
    name: "Aperol Spritz",
    type: ["Espumante", "Licores"],
    ingredients: ["120 mL Espumante", "120 mL Aperol", "40 mL Água com Gás"],
    recipe:
      "Drink montado servido na Taça Barone com cubos de gelo. Servir primeiro o espumante e depois o Aperol e a água. Finalizado com 1 fatia de laranja.",
    img: [
      "../../assets/Aperol Spritz-01.jpg",
      "../../assets/Aperol Spritz-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Celo Spritz",
    type: ["Espumante", "Licores"],
    ingredients: [
      "50 mL Limoncello",
      "25 mL Água com Gás",
      "20 mL Monin Limão Siciliano",
      "150 mL Espumante",
    ],
    recipe:
      "Drink Montado servido na Taça Barone com cubos de gelo. Finalizado com fatia de limão siciliano a francesa.",
    img: ["../../assets/Celo Spritz-01.jpg", "../../assets/Celo Spritz-02.jpg"],
    hidden: false,
  },
  {
    name: "French 45",
    type: ["Espumante", "Whisky"],
    ingredients: [
      "60 mL Whisky Bourbon",
      "30 mL Suco de Limão",
      "15 mL Xarope Simples",
      "Completar com Espumante",
    ],
    recipe:
      "Drink batido sem o espumante, com dupla coagem servido na Taça resfriada. Completar volume com Espumante",
    img: ["../../assets/French 45-01.jpg", "../../assets/French 45-02.jpg"],
    hidden: false,
  },
  {
    name: "French 75",
    type: ["Espumante", "Gin", "Conhaque"],
    ingredients: [
      "60 mL Gin/Conhaque",
      "15 mL Suco de Limão",
      "10 mL Xarope Simples",
      "90 mL Espumante",
    ],
    recipe:
      "Drink batido sem o espumante, com dupla coagem servido na Taça Marguerita. Completar com Espumante",
    img: ["../../assets/French 75-01.jpg", "../../assets/French 75-02.jpg"],
    hidden: false,
  },
  {
    name: "Mimosa",
    type: ["Espumante"],
    ingredients: ["110 mL Suco de Laranja", "110 mL Espumante"],
    recipe: "Drink montado em uma Taça de Champanhe resfriada.",
    img: ["../../assets/Mimosa-01.jpg", "../../assets/Mimosa-02.jpg"],
    hidden: false,
  },
  {
    name: "Old Cuban",
    type: ["Espumante", "Rum"],
    ingredients: [
      "Hortelã",
      "60 mL Rum",
      "30 mL Suco de Limão",
      "15 mL Xarope Simples",
      "2 Dashes de Angostura",
      "Completar com Espumante",
    ],
    recipe:
      "Hortelã levemente macerada. Drink batido sem o espumante, com dupla coagem servido na Taça Marguerita resfriada. Completar com Espumante. Finalizado com casca de limão e folha de hortelã.",
    img: ["../../assets/Old Cuban-01.jpg", "../../assets/Old Cuban-02.jpg"],
    hidden: false,
  },
  // Gin
  {
    name: "Gin and Tonic",
    type: ["Gin", "Tônica"],
    ingredients: ["50 mL Gin", "Completar com Tônica"],
    recipe:
      "Drink Montado servido na Taça Barone com cubos de gelo. Finalizado com zest de laranja, ½ fatia de laranja e ramo de alecrim.",
    img: ["../../assets/Gin Tonica-01.jpg", "../../assets/Gin Tonica-02.jpg"],
    hidden: false,
  },
  {
    name: "Gin e Redbull Sabores",
    type: ["Gin"],
    ingredients: ["50 mL Gin", "1 Lata de Redbull"],
    recipe:
      "Drink montado em uma Taça de Barone com cubos de gelo. Finalizado com Rodela de Laranja.",
    img: ["../../assets/Gin Redbull-01.jpg", "../../assets/Gin Redbull-02.jpg"],
    hidden: false,
  },
  {
    name: "Gin Tropical",
    type: ["Gin"],
    ingredients: [
      "50 mL Gin",
      "50 mL Suco de Laranja",
      "1 Lata de Redbull Tropical",
    ],
    recipe:
      "Drink montado em uma Taça Barone com cubos de gelo. Finalizado com Rodela de Laranja.",
    img: [
      "../../assets/Gin Tropical-01.jpg",
      "../../assets/Gin Tropical-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Negroni",
    type: ["Gin", "Licores", "Vermouth"],
    ingredients: ["50 mL Gin", "50 mL Campari", "50 mL Vermouth Rosso"],
    recipe:
      "Drink Mexido com coagem simples servido no Copo Rocks com cubo de gelo grande. Finalizado com fatia de laranja e zest de laranja.",
    img: ["../../assets/Negroni-01.jpg", "../../assets/Negroni-02.jpg"],
    hidden: false,
  },
  {
    name: "Gin Collins",
    type: ["Gin", "Tônica"],
    ingredients: [
      "50 mL Gin",
      "20 mL Monin Gengibre",
      "20 mL Suco de Limão",
      "Completar com Tônica",
    ],
    recipe:
      "Drink montado servido na Taça Barone com cubos de gelo. Finalizado com rodela de limão e lâmina de gengibre.",
    img: ["../../assets/Gin Collins-01.jpg", "../../assets/Gin Collins-02.jpg"],
    hidden: false,
  },
  {
    name: "Bramble Black",
    type: ["Gin"],
    ingredients: [
      "100 mL Gin",
      "40 mL Suco de Limão",
      "20 mL Xarope Simples",
      "20 mL Monin Sabores",
    ],
    recipe:
      "Drink batido com coagem simples servido no Copo Rocks com cubo de gelo grande.",
    img: [
      "../../assets/Bramble Black-01.jpg",
      "../../assets/Bramble Black-02.jpg",
    ],
    hidden: true,
  },
  {
    name: "Blue Lady",
    type: ["Gin", "Triple Sec"],
    ingredients: [
      "75 mL Curaçau Blue",
      "50 mL Gin",
      "40 mL Suco de Limão Siciliano",
      "Clara de Ovo",
    ],
    recipe:
      "Drink batido duplamente, primeiramente com Dry Shake, com coagem dupla servido na Taça Coupe/Marguerita gelada. Finalizado com zest de laranja.",
    img: ["../../assets/Blue Lady-01.jpg", "../../assets/Blue Lady-02.jpg"],
    hidden: false,
  },
  {
    name: "Dry Martini",
    type: ["Gin", "Vermouth", "Vodka"],
    ingredients: ["60 mL Gin/Vodka", "7 mL Dry Vermouth"],
    recipe: "Drink mexido com dupla coagem servido na Taça Martini gelada.",
    img: ["../../assets/Dry Martini-01.jpg", "../../assets/Dry Martini-02.jpg"],
    hidden: false,
  },
  {
    name: "Fitzgerald",
    type: ["Gin"],
    ingredients: [
      "120 mL Gin",
      "50 mL Xarope Simples",
      "50 mL Suco de Limão Siciliano",
      "6 Dashes de Angostura",
    ],
    recipe:
      "Drink batido coado duplamente no Copo Rocks com cubo de gelo grande. Finalizado com zest de limão siciliano.",
    img: ["../../assets/Fitzgerald-01.jpg", "../../assets/Fitzgerald-02.jpg"],
    hidden: false,
  },
  {
    name: "Bronx",
    type: ["Gin", "Vermmouth"],
    ingredients: [
      "50 mL Gin",
      "20 mL Dry Vermouth",
      "20 mL Vermouth Rosso",
      "30 mL Suco de Laranja",
      "3 Dashes de Angostura de Laranja",
    ],
    recipe:
      "Drink batido com dupla coagem, servido na Taça Martini gelada. Finalizado com casca de laranja.",
    img: ["../../assets/Bronx-01.jpg", "../../assets/Bronx-02.jpg"],
    hidden: true,
  },
  // Licores
  {
    name: "Carajillo",
    type: ["Licores"],
    ingredients: ["50 mL Licor 43", "50 mL Café Expresso"],
    recipe:
      "Drink batido com coagem simples servido no Copo Rocks com cubo de gelo grande.",
    img: ["../../assets/Carajillo-01.jpg", "../../assets/Carajillo-02.jpg"],
    hidden: false,
  },
  {
    name: "Folha Experience",
    type: ["Licores"],
    ingredients: ["100 mL Licor 43", "40 mL Monin Rantcho"],
    recipe:
      "Drink batido com coagem simples servido no Copo Rocks com cubo de gelo grande. Finalizado com espuma de limão siciliano e raspas de limão siciliano.",
    img: [
      "../../assets/Folha Experience-01.jpg",
      "../../assets/Folha Experience-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Campari Tonic",
    type: ["Licores", "Tônica"],
    ingredients: ["70 mL Campari", "210 mL Água Tônica"],
    recipe:
      "Drink montado servido na Taça Barone com cubos de gelo. Finalizado com fatia de laranja.",
    img: [
      "../../assets/Campari Tonic-01.jpg",
      "../../assets/Campari Tonic-02.jpg",
    ],
    hidden: false,
  },
  // Não Alcoólicos
  {
    name: "Soda Italiana",
    type: ["Não Alcoólicos"],
    ingredients: [
      "40 mL Monin Sabores",
      "20 mL Suco de Limão",
      "Completar Água com Gás",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de limão siciliano a francesa.",
    img: [
      "../../assets/Soda Italiana-01.jpg",
      "../../assets/Soda Italiana-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Ice Tea",
    type: ["Não Alcoólicos"],
    ingredients: [
      "40 mL Monin Sabores",
      "20 mL Suco de Limão",
      "Completar Água sem Gás",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de limão siciliano a francesa.",
    img: ["../../assets/Ice Tea-01.jpg", "../../assets/Ice Tea-02.jpg"],
    hidden: false,
  },
  {
    name: "Pink Lemonade",
    type: ["Não Alcoólicos"],
    ingredients: [
      "50 mL Monin Grenadine",
      "20 mL Suco de Limão",
      "Completar Água com Gás",
    ],
    recipe: "Drink montado servido no Copo Longo com cubos de gelo.",
    img: [
      "../../assets/Pink Lemonade-01.jpg",
      "../../assets/Pink Lemonade-02.jpg",
    ],
    hidden: true,
  },
  // Rum
  {
    name: "Mojito",
    type: ["Rum"],
    ingredients: [
      "60 mL Rum",
      "30 mL Xarope Simples",
      "Suco de 1 Limão",
      "8 Folhas de Hortelã",
      "Completar com Água com Gás",
    ],
    recipe:
      "Hortelã levemente Macerada no shaker. Drink batido sem a água com gás, servido no Copo Longo com cubos de gelo sem coagem. Finalizado com água com gás até o topo e levemente mexido.",
    img: ["../../assets/Mojito-01.jpg", "../../assets/Mojito-02.jpg"],
    hidden: false,
  },
  {
    name: "Cold Kiss",
    type: ["Rum", "Vodka"],
    ingredients: [
      "20 mL Vodka",
      "50 mL Rum Malibu",
      "20 mL Monin Menta Glacial",
      "20 mL Monin Limão Siciliano",
      "50 mL Água de Coco",
    ],
    recipe:
      "Drink batido, servido no Copo Longo, com cubos de gelo. Finalizado com espuma de gengibre e ramo de hortelã.",
    img: ["../../assets/Cold Kiss-01.jpg", "../../assets/Cold Kiss-02.jpg"],
    hidden: false,
  },
  {
    name: "Piña Colada",
    type: ["Rum"],
    ingredients: [
      "60 mL Rum",
      "100 mL Suco de Abacaxi",
      "50 mL Leite de Coco",
      "30 mL Leite Condensado",
    ],
    recipe:
      "Drink batido com simples coagem servido no Copo Longo com cubos de gelo. Finalizado com fatia de abacaxi e cereja.",
    img: ["../../assets/Pina Colada-01.jpg", "../../assets/Pina Colada-02.jpg"],
    hidden: false,
  },
  {
    name: "Queens Park Swizzle",
    type: ["Rum"],
    ingredients: [
      "60 mL Rum",
      "30 mL Xarope Simples",
      "30 mL Suco de Limão",
      "2 Dashes Angostura",
    ],
    recipe:
      "Drink batido, com dupla coagem, servido na Taça Martini resfriada.",
    img: [
      "../../assets/Queens Park Swizzle-01.jpg",
      "../../assets/Queens Park Swizzle-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Daiquiri",
    type: ["Rum"],
    ingredients: [
      "60 mL Rum",
      "20 mL Suco de Limão Siciliano",
      "20 mL Xarope Simples",
    ],
    recipe:
      "Drink batido com dupla coagem servido na Taça Martini gelada. Finalizado com zest de limão siciliano.",
    img: ["../../assets/Daiquiri-01.jpg", "../../assets/Daiquiri-02.jpg"],
    hidden: false,
  },
  {
    name: "Cointreau Daiquiri",
    type: ["Rum", "Triple Sec"],
    ingredients: [
      "40 mL Rum",
      "40 mL Suco de Limão",
      "20 mL Xarope Simples",
      "20 mL Cointreau",
    ],
    recipe:
      "Drink batido com simples coagem servido no Copo Longo com cubos de gelo. Finalizado com fatia de limão.",
    img: [
      "../../assets/Cointreau Daiquiri-01.jpg",
      "../../assets/Cointreau Daiquiri-02.jpg",
    ],
    hidden: false,
  },
  // Sake
  {
    name: "Spicy Dreams",
    type: ["Sake", "Licores"],
    ingredients: [
      "100 mL Sake",
      "50 mL Aperol",
      "60 mL Monin Limão Siciliano",
      "30 mL Monin Rantcho",
      "Pimenta Rosa",
    ],
    recipe:
      "Pimenta Macerada. Drink batido com dupla coagem servido na Taça com cubos de gelo. Finalizado com rodela de limão e pimenta rosa.",
    img: [
      "../../assets/Spicy Dreams-01.jpg",
      "../../assets/Spicy Dreams-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Sakerinha de Maracujá",
    type: ["Sake"],
    ingredients: [
      "100 mL Sake",
      "50 mL Xarope Simples",
      "50 mL Maracujá in Natura",
    ],
    recipe:
      "Drink batido, com dupla coagem, servido no Copo Rocks com cubo de gelo.",
    img: [
      "../../assets/Maracuja com Sake-01.jpg",
      "../../assets/Maracuja com Sake-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Japanese Ice Tea",
    type: ["Sake"],
    ingredients: [
      "50 mL Sake",
      "20 mL Monin Sabores",
      "Completar com Água com Gás",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de limão siciliano a francesa.",
    img: [
      "../../assets/Japanese Ice Tea-01.jpg",
      "../../assets/Japanese Ice Tea-02.jpg",
    ],
    hidden: false,
  },
  // Tequila
  {
    name: "Margarita",
    type: ["Tequila", "Triple Sec"],
    ingredients: [
      "50 mL Tequila Silver",
      "20 mL Suco de Limão",
      "25 mL Cointreau",
    ],
    recipe:
      "Drink batido com dupla coagem servido na Taça Margarita levemente resfriada. Finalizado com borda de sal e fatia de limão na borda.",
    img: ["../../assets/Margarita-01.jpg", "../../assets/Margarita-02.jpg"],
    hidden: false,
  },
  {
    name: "Blue Velvet Margarita",
    type: ["Tequila", "Triple Sec"],
    ingredients: [
      "60 mL Tequila",
      "30 mL Curaçau Blue",
      "30 mL Suco de Limão",
      "15 mL Cointreau",
    ],
    recipe:
      "Drink batido, com dupla coagem, servido na Taça Margarita levemente resfriada. Finalizado com borda de sal e fatia de limão na borda.",
    img: [
      "../../assets/Blue Velvet Margarita-01.jpg",
      "../../assets/Blue Velvet Margarita-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Teqroni",
    type: ["Tequila", "Campari", "Vermouth"],
    ingredients: ["50 mL Tequila", "50 mL Campari", "50 mL Vermouth Rosso"],
    recipe:
      "Drink Mexido com coagem simples, servido no Copo Rocks, com cubo de gelo grande. Finalizado com fatia e zest de laranja.",
    img: [""],
    hidden: false,
  },
  {
    name: "Long Island Ice Tea",
    type: ["Tequila", "Gin", "Vodka", "Rum", "Triple Sec"],
    ingredients: [
      "10 mL Tequila",
      "10 mL Gin",
      "10 mL Vodka",
      "10 mL Rum",
      "10 mL Cointreau",
      "15 mL Xarope Simples",
      "15 mL Suco de Limão",
      "Completar com Coca-Cola",
    ],
    recipe:
      "Drink batido, com simples coagem, servido em Copo Longo, com cubos de gelo.",
    img: [
      "../../assets/Long Island Ice Tea-01.jpg",
      "../../assets/Long Island Ice Tea-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Tequila Sunrise",
    type: ["Tequila"],
    ingredients: [
      "50 mL Tequila",
      "10 mL Grenadine",
      "Completar com Suco de Laranja",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de laranja e cereja.",
    img: [
      "../../assets/Tequila Sunrise-01.jpg",
      "../../assets/Tequila Sunrise-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Matador",
    type: ["Tequila"],
    ingredients: [
      "50 mL Tequila",
      "100 mL Suco de Abacaxi",
      "20 mL Suco de Limão",
    ],
    recipe:
      "Drink batido com coagem simples servido na Taça Margarita levemente resfriada.",
    img: ["../../assets/Matador-01.jpg", "../../assets/Matador-02.jpg"],
    hidden: false,
  },
  {
    name: "Mexican Mule",
    type: ["Tequila"],
    ingredients: [
      "50 mL Tequila",
      "25 mL Suco de Limão",
      "15 mL Monin Gengibre",
      "Completar com Água com Gás",
    ],
    recipe:
      "Drink montado servido no Copo Moscow Mule com cubos de gelo. Finalizado com rodela de limão.",
    img: [
      "../../assets/Mexican Mule-01.jpg",
      "../../assets/Mexican Mule-02.jpg",
    ],
    hidden: false,
  },
  // Vodka
  {
    name: "Moscow Mule",
    type: ["Vodka"],
    ingredients: [
      "50 mL Vodka",
      "40 mL Suco de Limão",
      "30 mL Monin Gengibre",
      "20 mL Xarope Simples",
    ],
    recipe:
      "Drink batido servido no Copo Moscow Mule com coagem simples e cubo de gelo grande. Finalizado com espuma de gengibre e raspas de limão.",
    img: ["../../assets/Moscow Mule-01.jpg", "../../assets/Moscow Mule-02.jpg"],
    hidden: false,
  },
  {
    name: "Vodka Soda",
    type: ["Vodka"],
    ingredients: [
      "50 mL Vodka",
      "15 mL Suco de Limão",
      "Completar com Água com Gás",
    ],
    recipe:
      "Drink montado em um Copo Rocks, com cubo de gelo grande. Finalizado com 2 rodelas de limão.",
    img: ["../../assets/Vodka Soda-01.jpg", "../../assets/Vodka Soda-02.jpg"],
    hidden: false,
  },
  {
    name: "Espresso Martini",
    type: ["Vodka", "Licores"],
    ingredients: ["50 mL Vodka", "30 mL Licor Kahluá", "50 mL Café Expresso"],
    recipe: "Drink batido, servido na Taça Martini gelada, com dupla coagem.",
    img: [
      "../../assets/Espresso Martini-01.jpg",
      "../../assets/Espresso Martini-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Lagoa Azul",
    type: ["Vodka", "Triple Sec"],
    ingredients: [
      "50 mL Vodka",
      "30 mL Curaçau Blue",
      "20 mL Suco de Limão",
      "Completar com Club Soda",
    ],
    recipe:
      "Drink montado, servido no Copo Longo, com cubos de gelo. Finalizado com rodela de laranja.",
    img: ["../../assets/Lagoa Azul-01.jpg", "../../assets/Lagoa Azul-02.jpg"],
    hidden: false,
  },
  {
    name: "Sex on the Beach",
    type: ["Vodka"],
    ingredients: [
      "50 mL Vodka",
      "20 mL Licor de Pêssego",
      "Completar com Suco de Laranja e Cranberry",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de laranja.",
    img: [
      "../../assets/Sex on the Beach-01.jpg",
      "../../assets/Sex on the Beach-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Black Russian",
    type: ["Vodka"],
    ingredients: ["50 mL Vodka", "20 mL Licor de Café"],
    recipe:
      "Drink montado servido no Copo Rocks com cubo de gelo grande. Finalizado com zest de limão siciliano.",
    img: [
      "../../assets/Black Russian-01.jpg",
      "../../assets/Black Russian-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Lemon Drop",
    type: ["Vodka"],
    ingredients: ["50 mL Vodka", "20 mL Suco de Limão", "20 mL Xarope Simples"],
    recipe:
      "Drink batido servido na Taça Martini levemente resfriada. Finalizado com zest de limão.",
    img: ["../../assets/Lemon Drop-01.jpg", "../../assets/Lemon Drop-02.jpg"],
    hidden: false,
  },
  {
    name: "Cosmopolitan",
    type: ["Vodka", "Triple Sec"],
    ingredients: [
      "40 mL Vodka",
      "30 mL Cointreau",
      "20 mL Suco de Limão",
      "20 mL Suco de Cranberry",
    ],
    recipe:
      "Drink batido com dupla coagem servido na Taça Martini levemente resfriada. Finalizado com zest de limão siciliano.",
    img: [
      "../../assets/Cosmopolitan-01.jpg",
      "../../assets/Cosmopolitan-02.jpg",
    ],
    hidden: false,
  },
  // Whisky
  {
    name: "Old Fashioned",
    type: ["Whisky"],
    ingredients: [
      "50 mL Whisky Bourbon",
      "5 mL Xarope Simples",
      "3 Dashes de Angostura",
    ],
    recipe:
      "Drink mexido servido no Copo Rocks com cubo de gelo grande. Finalizado com zest de laranja.",
    img: [
      "../../assets/Old Fashioned-01.jpg",
      "../../assets/Old Fashioned-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Manhattan",
    type: ["Whisky", "Vermouth"],
    ingredients: [
      "100 mL Whisky Bourbon",
      "40 mL Vermouth Rosso",
      "6 Dashes de Angostura",
    ],
    recipe:
      "Drink mexido servido na Taça Coupe levemente resfriada. Finalizado com cereja.",
    img: ["../../assets/Manhattan-01.jpg", "../../assets/Manhattan-02.jpg"],
    hidden: false,
  },
  {
    name: "Whisky Sour",
    type: ["Whisky"],
    ingredients: [
      "50 mL Whisky Bourbon",
      "20 mL Suco de Limão",
      "15 mL Xarope Simples",
      "Clara de Ovo",
    ],
    recipe:
      "Drink batido servido no Copo Rocks com dupla coagem e cubo de gelo grande. Finalizado com zest de limão.",
    img: ["../../assets/Whisky Sour-01.jpg", "../../assets/Whisky Sour-02.jpg"],
    hidden: false,
  },
  {
    name: "Mint Julep",
    type: ["Whisky"],
    ingredients: [
      "50 mL Whisky Bourbon",
      "10 Folhas de Hortelã",
      "15 mL Xarope Simples",
    ],
    recipe:
      "Hortelã levemente macerada. Drink montado servido no Copo Julep com gelo triturado. Finalizado com ramo de hortelã.",
    img: ["../../assets/Mint Julep-01.jpg", "../../assets/Mint Julep-02.jpg"],
    hidden: false,
  },
  {
    name: "Boulevardier",
    type: ["Whisky", "Licores", "Vermouth"],
    ingredients: [
      "50 mL Whisky Bourbon",
      "50 mL Campari",
      "50 mL Vermouth Rosso",
    ],
    recipe:
      "Drink mexido servido no Copo Rocks com cubo de gelo grande. Finalizado com fatia e zest de laranja.",
    img: [
      "../../assets/Boulevardier-01.jpg",
      "../../assets/Boulevardier-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "John Collins",
    type: ["Whisky"],
    ingredients: [
      "50 mL Whisky Bourbon",
      "20 mL Suco de Limão",
      "20 mL Xarope Simples",
      "Completar com Club Soda",
    ],
    recipe:
      "Drink montado servido no Copo Longo com cubos de gelo. Finalizado com fatia de limão.",
    img: [
      "../../assets/John Collins-01.jpg",
      "../../assets/John Collins-02.jpg",
    ],
    hidden: false,
  },
  {
    name: "Tratto Limoncello",
    type: ["Whisky", "Licores", "Vermouth"],
    ingredients: [
      "45 mL Whisky Bourbon",
      "45 mL Limoncello",
      "15 mL Dry Vermouth",
      "1 Dash Angostura",
      "1 Dash Bitter de Laranja",
    ],
    recipe:
      "Drink mexido servido no Copo Rocks com cubo de gelo grande. Finalizado com Casca de Laranja",
    img: [
      "../../assets/Tratto Limoncello-01.jpg",
      "../../assets/Tratto Limoncello-02.jpg",
    ],
    hidden: false,
  },
];
