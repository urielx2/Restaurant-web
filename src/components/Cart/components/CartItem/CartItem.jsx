import { memo } from "react";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const CartItem = memo(
  ({ item, updateQuantity, removeFromCart, isLast }) => {
    return (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.2 }}
        className={`flex justify-between items-center gap-3 py-5 relative ${
          isLast ? "" : "border-b border-white/20"
        }`}
      >
        <div className="flex items-center gap-3 w-full">
          <div className="bg-[#ffffff0d] p-2 flex justify-center items-center rounded-md">
            <img
              src={item.img}
              alt={item.text}
              className="w-15 h-10 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm font-semibold leading-4">
              {item.text} {item.selectedSauce && `(${item.selectedSauce})`}
            </span>
            <span className="text-xs">
              {item.qty === 1
                ? `${item.qty} elemento`
                : `${item.qty} elementos`}
            </span>
            <div className="flex justify-between items-center">
              <span className="font-semibold">${item.price * item.qty}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={item.qty === 1}
                  onClick={() => updateQuantity(item, item.qty - 1)}
                  className={`px-2 border rounded-full hover:bg-gray-200 transition-all duration-300 hover:text-black ${
                    item.qty === 1 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item, item.qty + 1)}
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
          onClick={() => removeFromCart(item)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <IconX size={18} stroke={1} />
        </button>
      </motion.div>
    );
  }
);
