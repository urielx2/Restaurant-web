import { IconToolsKitchen2, IconBurger, IconFlame } from "@tabler/icons-react";

export const sectionsMenu = [
  {
    title: "TACOS",
    icon: IconToolsKitchen2,
    items: [
      {
        name: "Taco de Bistec",
        price: "$45",
        desc: "Carne jugosa a la parrilla con cebolla, cilantro y salsa de la casa",
        img: "/tacos.webp",
      },
      {
        name: "Taco de Trompo",
        price: "$40",
        desc: "Tradicional pastor con piña caramelizada y salsa verde",
      },
    ],
  },
  {
    title: "GRINGAS",
    icon: IconToolsKitchen2,
    items: [
      {
        name: "Gringa de Bistec",
        price: "$70",
        desc: "Queso fundido con carne de bistec en tortilla de harina",
        img: "/tacos.webp",
      },
      {
        name: "Gringa de Trompo",
        price: "$65",
        desc: "Trompo con doble queso, tortilla doradita y piña",
      },
    ],
  },
  {
    title: "HAMBURGUESAS",
    icon: IconBurger,
    items: [
      {
        name: "Clásica",
        price: "$95",
        desc: "Carne 100% res, queso cheddar, lechuga, jitomate y aderezo especial",
        img: "/hamburguesa.webp",
      },
      {
        name: "Doble Smash",
        price: "$120",
        desc: "Dos carnes jugosas, queso doble y pan artesanal",
      },
    ],
  },
  {
    title: "BONELESS",
    icon: IconFlame,
    items: [
      {
        name: "Orden (10 pzas.)",
        price: "$110",
        desc: "Bañados en tu salsa favorita: BBQ, Buffalo o Mango Habanero",
        img: "/tacos.webp",
      },
    ],
  },
  {
    title: "ALITAS",
    icon: IconFlame,
    items: [
      {
        name: "Orden (8 pzas.)",
        price: "$105",
        desc: "Crujientes, con elección de salsa: BBQ, Buffalo, Lemon Pepper",
        img: "/alitas.webp",
      },
    ],
  },
];
