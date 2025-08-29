import { IconStarFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: {
    scale: 0.97,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

const imageVariants = {
  hover: {
    scale: 1.08,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

export const CardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          animate="show"
          custom={i}
          whileHover="hover"
          whileTap="tap"
        >
          <Link to={item.link}>
            <div className="rounded-3xl bg-[#111]/70 backdrop-blur-sm ring-1 ring-white/5 p-6 md:p-8 flex flex-col h-full gap-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex-1 flex flex-col gap-3">
                <motion.img
                  src={item.img}
                  alt={item.text}
                  className="rounded-3xl w-full object-cover"
                  variants={imageVariants}
                />
                <h4 className="font-bold text-lg">{item.text}</h4>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(item.stars || 5)].map((_, idx) => (
                    <IconStarFilled key={idx} size={18} />
                  ))}
                </div>
                <span className="font-semibold">${item.price}</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
