/**
 * Tags para a filtragem de tipos de café
 */
export enum CoffeeTags {
  all = "todos",
  traditional = "tradicional",
  withMilk = "com leite",
  iced = "gelado",
  special = "especial",
  alcoolic = "alcoólico",
}

/**
 * Lista de opções de cafés para o site
 */
export const coffeeList = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional cafe feito com a maçã.",
    image: "/src/assets/img/coffees/type=espresso.png",
    price: 9.9,
    tags: [CoffeeTags.traditional],
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluiádo, menos intenso que o tradicional.",
    image: "/src/assets/img/coffees/type=american.png",
    price: 9.9,
    tags: [CoffeeTags.traditional],
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Cafe expresso tradicional com espuma cremosa.",
    image: "/src/assets/img/coffees/type=creamyEspresso.png",
    price: 9.9,
    tags: [CoffeeTags.traditional],
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com cafe expresso e cubos de gelo.",
    image: "/src/assets/img/coffees/type=icedEspresso.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.iced],
  },
  {
    id: 5,
    title: "Cafe com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado.",
    image: "/src/assets/img/coffees/type=coffeeWithMilk.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.withMilk],
  },
  {
    id: 6,
    title: "Latte",
    description:
      "Uma dose de cafe expresso com o dobro de leite e espuma cremosa.",
    image: "/src/assets/img/coffees/type=latte.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.withMilk],
  },
  {
    id: 7,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de cafe e leite e espuma cremosa.",
    image: "/src/assets/img/coffees/type=capuccino.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.withMilk],
  },
  {
    id: 8,
    title: "Macchiato",
    description: "Cafe macheado com um pouco de leite e espuma cremosa.",
    image: "/src/assets/img/coffees/type=macchiato.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.withMilk],
  },
  {
    id: 9,
    title: "Mocaccino",
    description:
      "Cafe macheado com uma calda de chocolate, pouco leite e espuma cremosa.",
    image: "/src/assets/img/coffees/type=mochaccino.png",
    price: 9.9,
    tags: [CoffeeTags.traditional, CoffeeTags.withMilk],
  },
  {
    id: 10,
    title: "Chocolate Quente",
    description:
      "Bebida feita com chocolate dissolvido no leite quente e cafe.",
    image: "/src/assets/img/coffees/type=hotChocolate.png",
    price: 9.9,
    tags: [CoffeeTags.special, CoffeeTags.withMilk],
  },
  {
    id: 11,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    image: "/src/assets/img/coffees/type=cuban.png",
    price: 9.9,
    tags: [CoffeeTags.special, CoffeeTags.alcoolic, CoffeeTags.iced],
  },
  {
    id: 12,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco.",
    image: "/src/assets/img/coffees/type=hawaiian.png",
    price: 9.9,
    tags: [CoffeeTags.special],
  },
  {
    id: 13,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias.",
    image: "/src/assets/img/coffees/type=arabic.png",
    price: 9.9,
    tags: [CoffeeTags.special],
  },
  {
    id: 14,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly.",
    image: "/src/assets/img/coffees/type=irland.png",
    price: 9.9,
    tags: [CoffeeTags.special, CoffeeTags.alcoolic],
  },
];
