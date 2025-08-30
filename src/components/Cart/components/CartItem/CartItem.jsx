import { memo } from "react";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const CartItem = memo(({ item, updateQuantity, removeFromCart }) => (
  <motion.div
    key={item.id}
    layout
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.2 }}
    className="flex justify-between items-center gap-3 bg-[#111] backdrop-blur-sm ring-1 ring-white/5 text-white py-5 px-4 rounded-xl shadow-md relative"
  >
    <div className="flex items-center gap-3 w-full">
      <img
        src={item.img}
        alt={item.text}
        className="w-10 h-10 object-cover rounded-md"
      />
      <div className="flex flex-col gap-1 w-full">
        <span className="text-sm font-semibold leading-4">{item.text}</span>
        <span className="text-xs">
          {item.qty === 1 ? `${item.qty} elemento` : `${item.qty} elementos`}
        </span>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${item.price * item.qty}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={item.qty === 1}
              onClick={() => updateQuantity(item.id, item.qty - 1)}
              className={`px-2 border rounded-full hover:bg-gray-200 transition-all duration-300 hover:text-black ${
                item.qty === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.qty + 1)}
              className="px-2 border rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-300 hover:text-black"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      onClick={() => removeFromCart(item.id)}
      className="absolute top-2 right-2 cursor-pointer"
    >
      <IconX size={18} stroke={1} />
    </button>
  </motion.div>
));
