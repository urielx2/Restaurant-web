import { useState, memo } from "react";
import { motion } from "framer-motion";
import { CardGrid } from "../../ui";

const hamburguesas = [
  { id: 1, text: "Hamburguesa con papas", price: 20, img: "/hamburguesa.webp" },
  { id: 2, text: "Hamburguesa doble", price: 30, img: "/hamburguesa.webp" },
  { id: 3, text: "Hamburguesa premium", price: 40, img: "/hamburguesa.webp" },
];

const alitas = [
  { id: 1, text: "Alitas BBQ", price: 25, img: "/alitas.webp" },
  { id: 2, text: "Boneless picante", price: 30, img: "/alitas.webp" },
];

const tacos = [
  { id: 1, text: "Tacos de bistec", price: 25, img: "/tacos.webp" },
  { id: 2, text: "Tacos de trompo", price: 30, img: "/tacos.webp" },
];

const categoriesOrder = [
  {
    id: 1,
    category: "hamburguesas",
    img: "/orders/hamburguesa-order.webp",
    component: <CardGrid items={hamburguesas} />,
  },
  {
    id: 2,
    category: "alitas y boneless",
    img: "/orders/pollo.webp",
    component: <CardGrid items={alitas} />,
  },
  {
    id: 3,
    category: "tacos y gringas",
    img: "/orders/taco.webp",
    component: <CardGrid items={tacos} />,
  },
];

const CategoryTab = memo(({ category, isSelected, onClick }) => (
  <li onClick={() => onClick(category.id)} className="cursor-pointer">
    <motion.div
      className="flex flex-col items-center gap-1 justify-center"
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0.3 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <img
        src={category.img}
        alt={category.category}
        className="w-12 h-12 md:w-15 md:h-15 object-cover"
      />
      <p className="uppercase font-bold text-xs md:text-sm text-center whitespace-nowrap">
        {category.category}
      </p>
    </motion.div>
  </li>
));

export const CategoriesOrder = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesOrder[0].id);
  const activeTab = categoriesOrder.find((cat) => cat.id === activeCategory);

  return (
    <section className="w-full md:max-w-4xl mx-auto">
      <ul className="w-full md:w-fit mx-auto flex justify-start sm:justify-center items-center py-5 rounded-full bg-[#111]/70 ring-1 ring-white/5 px-10 md:px-16 gap-5 md:gap-10 overflow-x-auto no-scrollbar">
        {categoriesOrder.map((category) => (
          <CategoryTab
            key={category.id}
            category={category}
            isSelected={activeCategory === category.id}
            onClick={setActiveCategory}
          />
        ))}
      </ul>

      <motion.div
        className="mt-16"
        key={activeTab.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab.component}
      </motion.div>
    </section>
  );
};
