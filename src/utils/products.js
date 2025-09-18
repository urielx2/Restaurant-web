import { v4 as uuidv4 } from "uuid";

export const hamburguesas = [
  {
    id: uuidv4(),
    text: "Hamburguesa sencilla",
    price: 55,
    img: "/hamburguesa.webp",
  },
  {
    id: uuidv4(),
    text: "Hamburguesa sencilla con papas",
    price: 70,
    img: "/hamburguesa.webp",
  },
  {
    id: uuidv4(),
    text: "Hamburguesa doble",
    price: 70,
    img: "/hamburguesa.webp",
  },
  {
    id: uuidv4(),
    text: "Hamburguesa doble con papas",
    price: 85,
    img: "/hamburguesa.webp",
  },
];

export const alitas = [
  {
    id: uuidv4(),
    text: "Orden de boneless",
    price: 110,
    img: "/boneless.webp",
    sauces: ["BBQ", "Buffalo", "Mango"],
  },
  {
    id: uuidv4(),
    text: "Orden de alitas",
    price: 135,
    img: "/alitas.webp",
    sauces: ["BBQ", "Buffalo", "Mango"],
  },
];

export const tacos = [
  {
    id: uuidv4(),
    text: "Orden tacos de maíz de bistec",
    price: 85,
    img: "/tacos-erick.webp",
  },
  {
    id: uuidv4(),
    text: "Orden tacos de harina de bistec",
    price: 80,
    img: "/orden-harina.webp",
  },
  {
    id: uuidv4(),
    text: "Orden tacos de maíz de trompo",
    price: 85,
    img: "/tacos-trompo-maiz.webp",
  },
  {
    id: uuidv4(),
    text: "Orden tacos de harina de trompo",
    price: 85,
    img: "/tacos-trompo.webp",
  },
  {
    id: uuidv4(),
    text: "Enchiladas",
    price: 80,
    img: "/enchiladas.webp",
  },
  {
    id: uuidv4(),
    text: "Pirata chica",
    price: 20,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Pirata grande",
    price: 20,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Gringa chica",
    price: 35,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Gringa grande",
    price: 80,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Campechana chica",
    price: 80,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Campechana grande",
    price: 80,
    img: "/gringa.webp",
  },
  {
    id: uuidv4(),
    text: "Papas fritas",
    price: 55,
    img: "/papas.webp",
  },
  {
    id: uuidv4(),
    text: "Papas fritas con queso y carne",
    price: 85,
    img: "/papas-queso.webp",
  },
];
