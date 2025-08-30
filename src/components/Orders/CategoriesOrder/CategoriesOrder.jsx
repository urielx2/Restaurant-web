import { useState } from "react";
import { motion } from "framer-motion";
import { CardGrid } from "../../ui";
import { alitas, hamburguesas, tacos } from "../../../utils";
import { CategoryTab } from "./components/CategoryTab";

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
