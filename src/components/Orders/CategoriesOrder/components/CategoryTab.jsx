import { useEffect, memo, useRef } from "react";
import { motion } from "framer-motion";

export const CategoryTab = memo(({ category, isSelected, onClick }) => {
  const tabRef = useRef(null);

  useEffect(() => {
    if (isSelected && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [isSelected]);

  return (
    <li
      ref={tabRef}
      onClick={() => onClick(category.id)}
      className="cursor-pointer"
    >
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
  );
});
