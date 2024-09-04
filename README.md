# Projeto Bierhaus

Este projeto tem como finalidade servir como um guia rápido para barmen e seus clientes no preparo e na escolha de drinks, respectivamente. Ele foi desenvolvido para ser acessado por meio de dispositivos móveis.

## Desafios ao longo do projeto

Aqui descrevo alguns dos desafios e aprendizados que tive ao longo deste projeto.

### drinksDatabase Properties

Na concepção inicial do projeto, projetei uma base de dados de bebidas, denominada `drinksDatabase`, em que o tipo de bebida (`type`) e os ingredientes (`ingredients`) eram inicialmente do tipo `string`. Logo percebi que existem drinks que possuem mais de um tipo de bebida alcoólica em sua receita, então mudei a tipagem da propriedade `type` para um array de strings. Ao fazer essa mudança, tive que realizar alterações no meu contexto; a principal delas foi que, antes, para filtrar uma bebida por seu tipo, eu utilizava o método `filter` e retornava um `map(drinkType)` do tipo que eu precisava. Após essa mudança, ficou muito mais simples filtrar o tipo da bebida, pois agora posso utilizar o método `includes` de array.

A mudança na tipagem de `ingredients` também foi necessária porque eu queria fazer cálculos com as quantidades de ingredientes, sendo os principais cálculos: "Quanto custa cada drink?" e "Quanto custa o drink X?". Tive dificuldades para extrair a bebida em questão e seu valor associado quando trabalhava com uma `string`, então optei por refatorar toda a `drinksDatabase` e transformar `ingredients` em um array de objetos contendo as propriedades `name` e `quantity`. Isso gerou um novo desafio: no componente `DrinkCard`, precisei tratar alguns casos de ingredientes para mostrar o texto correto na página (por exemplo, folhas de hortelã, lata de Red Bull). No entanto, com o uso simples de declarações `if`, o problema foi superado. Com a bebida e sua quantidade organizadas em objetos, ficou muito mais fácil realizar cálculos úteis e criar as funções `costPerDrink` e `getAllDrinksPrices`. Para isso, eu só precisava de uma base de dados com a bebida, seu custo e sua quantidade, o que nos leva ao próximo desafio:

### beveragesDatabase

Agora que eu tinha uma maneira de acessar uma bebida e sua quantidade e realizar cálculos úteis com ela, precisava de uma forma de saber quanto cada mL de uma determinada bebida custava. Para isso, criei o banco de dados de bebidas, denominado `beveragesDatabase`. Esta base de dados é um array de objetos que precisa ter as propriedades `price` e `quantity`, que utilizo na função `getPricePerMl`, declarada dentro da função `costPerDrink`, para calcular dinamicamente o custo por mL de uma determinada bebida. Isso também facilita a adaptação caso algum insumo, no futuro, seja comprado em um frasco maior ou menor.

Inicialmente, a concepção desta base de dados não incluía um campo de `dateOfPurchase`, mas decidi adicioná-lo pensando que poderia ser útil para alguém que deseje fazer um controle mais rigoroso de estoque. Após definir as propriedades da base de dados, foi necessário preenchê-la com as quantidades e valores. Consegui algumas informações que eu já tinha, enquanto outras foram aproximações, aguardando a compra de novos insumos para que esses dados sejam atualizados com as informações corretas. Decidi também incluir nesta base de dados as bebidas e suas respectivas marcas, com o intuito de, no futuro, realizar cálculos de um mesmo drink utilizando bebidas de diferentes marcas.

### costPerDrink Function

A criação desta função apresentou algumas dificuldades. A primeira era a dificuldade de extrair informações úteis para um cálculo a partir de `strings`, o que foi corrigido transformando `ingredients` em um array de objetos. O desafio seguinte foi que, na `beveragesDatabase`, algumas `quantities` não são valores numéricos, mas sim `strings`, como "Completar" e "Pitada". Para atribuir um valor numérico e conseguir fazer um cálculo útil para determinar o valor do drink, tratei esses dados e, quando essas `strings` aparecem, o preço do ingrediente completo é utilizado para o cálculo.

## Implementações futuras

Este projeto possui algumas funções interessantes, que no momento só podem ser acessadas por meio de `console.log`. Pretendo implementar uma página chamada `utils`, na qual haverá formulários para que essas funções possam ser utilizadas pelo usuário final. As funções em questão são: `sumOfIngredients`, `filterDrinksByIngredient`, `costPerDrink` e `getAllDrinksPrices`.
