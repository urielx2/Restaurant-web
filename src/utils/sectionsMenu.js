import { IconToolsKitchen2, IconBurger, IconFlame } from "@tabler/icons-react";

export const sectionsMenu = [
  {
    title: "TACOS",
    icon: IconToolsKitchen2,
    items: [
      {
        name: "Tacos de maíz",
        price: "$85",
        desc: "Carne con cebolla, cilantro y salsa de la casa",
        img: "/tacos-erick.webp",
      },
      {
        name: "Tacos de harina",
        price: "$80",
        desc: "Carne con cebolla, cilantro y salsa de la casa.",
      },
      {
        name: "Tacos de bistec/trompo",
        price: "$85",
        desc: "Carne con cebolla, cilantro y salsa de la casa.",
      },
      {
        name: "Tacos con queso y aguacate",
        price: "$95",
        desc: "Carne con cebolla, cilantro y salsa de la casa.",
      },
      {
        name: "Enchiladas",
        price: "$80",
        desc: "Tortillas de maíz rellenas, bañadas en salsa roja o verde, gratinadas con queso y acompañadas de crema y cebolla.",
      },
    ],
  },
  {
    title: "HAMBURGUESAS",
    icon: IconBurger,
    items: [
      {
        name: "Hamburguesa sencilla",
        price: "$55",
        desc: "Clásica hamburguesa con carne de res, queso, lechuga, jitomate.",
        img: "/hamburguesa.webp",
      },
      {
        name: "Hamburguesa sencilla con papas",
        price: "$70",
        desc: "Clásica hamburguesa con carne de res, queso, lechuga, jitomate y papas fritas.",
      },
      {
        name: "Hamburguesa doble",
        price: "$70",
        desc: "Doble carne jugosa con queso, acompañada de lechuga, jitomate.",
      },
      {
        name: "Hamburguesa doble con papas",
        price: "$85",
        desc: "Doble carne jugosa con queso, acompañada de lechuga, jitomate y papas fritas.",
      },
    ],
  },
  {
    title: "BONELESS Y ALITAS",
    icon: IconFlame,
    items: [
      {
        name: "Orden de boneless",
        price: "$110",
        desc: "Crujientes trozos de pechuga de pollo, bañados en la salsa de tu elección.",
        img: "/boneless.webp",
      },
      {
        name: "Orden de alitas",
        price: "$135",
        desc: "Jugosas alitas de pollo, doradas al punto perfecto y cubiertas con tu salsa favorita.",
      },
    ],
  },
  {
    title: "ESPECIALIDADES DE LA CASA",
    icon: IconToolsKitchen2,
    items: [
      {
        name: "Pirata chica",
        price: "$20",
        desc: "Tortilla de harina con carne, queso, aguacate, cebolla y cilantro.",
        img: "/tacos-trompo-maiz.webp",
      },
      {
        name: "Pirata grande",
        price: "$20",
        desc: "Tortilla de harina grande con carne, queso, aguacate, cebolla y cilantro.",
      },
      {
        name: "Gringa chica",
        price: "$35",
        desc: "Tortilla de harina con trompo al pastor, queso, aguacate, cebolla y cilantro.",
      },
      {
        name: "Gringa grande",
        price: "$80",
        desc: "Tortilla de harina grande con trompo al pastor, queso, aguacate, cebolla y cilantro.",
      },
      {
        name: "Campechana chica",
        price: "$80",
        desc: "Combinación de carne  y trompo en tortilla de harina con queso, aguacate, cebolla y cilantro.",
      },
      {
        name: "Campechana grande",
        price: "$80",
        desc: "Versión grande con carne  y trompo en tortilla de harina con queso, aguacate, cebolla y cilantro.",
      },
      {
        name: "Papas fritas",
        price: "$55",
        desc: "Crujientes papas a la francesa.",
      },
      {
        name: "Papas fritas con queso y carne",
        price: "$85",
        desc: "Papas fritas con queso fundido y carne al gusto.",
      },
    ],
  },
];
