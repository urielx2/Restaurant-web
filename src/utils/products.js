import { v4 as uuidv4 } from "uuid";

export const hamburguesas = [
  {
    id: uuidv4(),
    text: "Hamburguesa con papas",
    price: 20,
    img: "/hamburguesa.webp",
  },
  {
    id: uuidv4(),
    text: "Hamburguesa doble",
    price: 30,
    img: "/hamburguesa.webp",
  },
  {
    id: uuidv4(),
    text: "Hamburguesa premium",
    price: 40,
    img: "/hamburguesa.webp",
  },
];

export const alitas = [
  {
    id: uuidv4(),
    text: "Alitas",
    price: 25,
    img: "/alitas.webp",
    sauces: ["BBQ", "Buffalo", "Mixto"],
  },
  {
    id: uuidv4(),
    text: "Boneless picante",
    price: 30,
    img: "/alitas.webp",
    sauces: ["BBQ", "Buffalo", "Mixto"],
  },
];

export const tacos = [
  { id: uuidv4(), text: "Tacos de bistec", price: 25, img: "/tacos.webp" },
  { id: uuidv4(), text: "Tacos de trompo", price: 30, img: "/tacos.webp" },
];
