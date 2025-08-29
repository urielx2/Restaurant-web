import { useState } from "react";
import { Container } from "../layout";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../../utils";

export const Customize = () => {
  const [selected, setSelected] = useState(properties[0]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (id) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((ing) => ing !== id) : [...prev, id]
    );
  };

  const totalPrice =
    selected.price +
    selectedIngredients.reduce((acc, id) => {
      const ing = selected.ingredients?.find((i) => i.id === id);
      return acc + (ing ? ing.price : 0);
    }, 0);

  return (
    <Container id="customize">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Personaliza tu pedido
      </h2>

      <div className="grid grid-cols-12 gap-y-20 sm:gap-5 items-center">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
          {properties.map((prop) => {
            const selectedId = selected.id === prop.id;
            return (
              <motion.button
                key={prop.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  borderColor: selectedId ? "#fff" : "rgba(107,114,128,0.6)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelected(prop);
                  setSelectedIngredients([]);
                }}
                className={`p-6 border-2 rounded-xl uppercase text-lg cursor-pointer ${
                  selectedId
                    ? "border-white text-white"
                    : "bg-transparent text-gray-500"
                }`}
              >
                {prop.text}
              </motion.button>
            );
          })}
        </div>

        <div className="col-span-12 md:col-span-6 w-full h-auto sm:w-100 sm:h-100 mx-auto flex justify-center items-center relative">
          <img
            src="/personaliza.webp"
            alt="personaliza"
            className="absolute -translate-y-10 translate-x-3 w-48 h-48 sm:w-52 sm:h-52 object-cover transition-transform duration-500"
            style={{ transform: `scale(${selected.scale})` }}
          />

          <img
            src="/plato.webp"
            alt="plato"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
          <h3 className="text-center md:text-start">Ingredientes</h3>

          <AnimatePresence mode="popLayout">
            {selected.ingredients?.map((ing) => (
              <motion.button
                key={ing.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleIngredient(ing.id)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className={`py-2 px-5 cursor-pointer rounded-lg uppercase text-sm self-center md:self-start shadow-md transition-colors ${
                  selectedIngredients.includes(ing.id)
                    ? "bg-amber-400 text-black"
                    : "bg-amber-50 text-black"
                }`}
              >
                {ing.text} (+${ing.price})
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div
        className="mt-10 mx-auto cursor-pointer font-semibold text-lg rounded-md 
             transition-colors duration-300 py-2 px-3 uppercase 
             bg-primary text-white hover:bg-amber-500 w-full md:w-fit text-center"
      >
        <p className="font-light">
          Ordenar por:{" "}
          <motion.span
            key={totalPrice}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-bold"
          >
            ${totalPrice}
          </motion.span>
        </p>
      </div>
    </Container>
  );
};
