import { IBevarege } from "../providers/drinksContext";

export const beveragesDatabase: IBevarege[] = [
  // Xaropes
  { name: "Xarope Simples", price: 1.65, quantity: 300 },
  { name: "Xarope Semi-Rich", price: 1.85, quantity: 300 },
  { name: "Xarope Rich", price: 2.0, quantity: 300 },
  // Sucos
  {
    name: "Suco de Limão",
    price: 0.41,
    quantity: 35,
  },
  {
    name: "Limão",
    price: 0.41,
    quantity: 1,
  },
  { name: "Suco de Limão Siciliano", price: 0.41, quantity: 35.0 },
  { name: "Suco de Laranja", price: 2.82, quantity: 200.0 },
  { name: "Suco de Abacaxi", price: 2.82, quantity: 200.0 },
  { name: "Suco de Laranja e Cranberry", price: 2.82, quantity: 200.0 },
  { name: "Suco de Cranberry", price: 2.82, quantity: 200.0 },
  // Redbull
  {
    name: "Redbull",
    price: 7.91,
    quantity: 1,
  },
  {
    name: "Redbull Tropical",
    price: 7.91,
    quantity: 1,
  },
  {
    name: "Redbull Sabores",
    price: 7.91,
    quantity: 1,
  },
  // Águas
  {
    name: "Água com Gás",
    price: 1.9,
    quantity: 500,
  },
  {
    name: "Água sem Gás",
    price: 1.9,
    quantity: 500,
  },
  {
    name: "Água Tônica",
    price: 3.99,
    quantity: 350,
  },
  { name: "Tônica", price: 3.99, quantity: 350 },
  {
    name: "Club Soda",
    price: 4.82,
    quantity: 350,
  },
  { name: "Água de Coco", price: 3.45, quantity: 200 },
  // Monin
  {
    name: "Monin Gengibre",
    price: 49.9,
    quantity: 700,
  },
  {
    name: "Monin Limão Siciliano",
    price: 49.9,
    quantity: 700,
  },
  {
    name: "Monin Menta Glacial",
    price: 54.99,
    quantity: 700,
  },
  {
    name: "Monin Rantcho",
    price: 49.49,
    quantity: 700,
  },
  {
    name: "Monin Sabores",
    price: 29.9,
    quantity: 250,
  },
  {
    name: "Monin Grenadine",
    price: 29.9,
    quantity: 250,
  },
  {
    name: "Monin Groselha/Framboesa",
    price: 29.9,
    quantity: 250,
  },
  {
    name: "Grenadine",
    price: 29.9,
    quantity: 250,
  },
  // Diversos
  { name: "Hortelã", price: 2.99, quantity: 1000 },
  { name: "Clara de Ovo", price: 0.6, quantity: 1 },
  { name: "Pimenta Rosa", price: 0.41, quantity: 1 },
  { name: "Maracujá in Natura", price: 4.0, quantity: 50 },
  { name: "Angostura", price: 149, quantity: 1000 },
  { name: "Angostura de Laranja", price: 149, quantity: 1000 },
  { name: "Café Expresso", price: 1.69, quantity: 50 },
  { name: "Coca-Cola", price: 1.79, quantity: 200 },
  { name: "Leite de Coco", price: 5.94, quantity: 200 },
  { name: "Leite Condensado", price: 4.99, quantity: 395 },
  // Licores
  {
    name: "Aperol",
    price: 64.3,
    quantity: 750,
  },
  {
    name: "Campari",
    price: 67.8,
    quantity: 998,
  },
  {
    name: "Dry Vermouth",
    price: 31.9,
    quantity: 750,
  },
  {
    name: "Vermouth Rosso",
    price: 51.9,
    quantity: 1000,
  },
  {
    name: "Cointreau",
    price: 145.17,
    quantity: 700,
  },
  {
    name: "Curaçau Blue",
    price: 46.8,
    quantity: 720,
  },
  {
    name: "Licor de Pêssego",
    price: 46.8,
    quantity: 720,
  },
  {
    name: "Cynar",
    price: 20.9,
    quantity: 900,
  },
  {
    name: "Licor 43",
    price: 129.0,
    quantity: 700,
  },
  {
    name: "Licor Kahluá",
    price: 179.0,
    quantity: 1000,
  },
  {
    name: "Licor de Café",
    price: 179.0,
    quantity: 1000,
  },
  {
    name: "Limoncello",
    price: 82.98,
    quantity: 700,
  },
  // Rum
  {
    name: "Rum",
    price: 56.9,
    quantity: 980,
  },
  {
    name: "Rum Bacardi",
    price: 56.9,
    quantity: 980,
  },
  {
    name: "Rum Malibu",
    price: 55.57,
    quantity: 750,
  },
  {
    name: "Rum Montilla",
    price: 38.21,
    quantity: 1000,
  },
  // Cachaça
  {
    name: "Cachaça",
    price: 52.5,
    quantity: 1000,
  },
  {
    name: "Cachaça Seleta",
    price: 52.5,
    quantity: 1000,
  },
  {
    name: "Cachaça 51",
    price: 0.0,
    quantity: 965,
  },
  {
    name: "Cachaça Velho Barreiro",
    price: 17.1,
    quantity: 910,
  },
  // Espumante
  {
    name: "Espumante",
    price: 17.9,
    quantity: 187.0,
  },
  // Gin
  {
    name: "Gin",
    price: 150.0,
    quantity: 750,
  },
  {
    name: "Gin Beefeater 24",
    price: 150.0,
    quantity: 750,
  },
  {
    name: "Gin Beefeater",
    price: 150.0,
    quantity: 750,
  },
  {
    name: "Gin Tanqueray",
    price: 150.0,
    quantity: 750,
  },
  {
    name: "Gin Bulldog",
    price: 150.0,
    quantity: 750,
  },
  // Sake
  {
    name: "Sake",
    price: 49.9,
    quantity: 740,
  },
  // Tequila
  {
    name: "Tequila Silver",
    price: 105.48,
    quantity: 750,
  },
  // Vodka
  {
    name: "Vodka",
    price: 98.99,
    quantity: 1000,
  },
  {
    name: "Absolut Vodka",
    price: 98.99,
    quantity: 1000,
  },
  {
    name: "Vodka Grey Goose",
    price: 98.99,
    quantity: 1000,
  },
  {
    name: "Vodka Belvedere",
    price: 98.99,
    quantity: 1000,
  },
  // Whisky
  {
    name: "Whisky Bourbon",
    price: 108.8,
    quantity: 750,
  },
  {
    name: "Jack Daniels",
    price: 108.8,
    quantity: 750,
  },
  // Mistos
  { name: "Gin/Conhaque", price: 150.0, quantity: 750 },
  { name: "Gin/Vodka", price: 150.0, quantity: 750 },
];
