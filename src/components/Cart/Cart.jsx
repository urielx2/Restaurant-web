import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useCart } from "../../hooks/useCart";
import { EmptyCart } from "./components/EmptyCart";
import { CartItem } from "./components/CartItem";

export const Cart = () => {
  const { openCart, setOpenCart, cartItems, removeFromCart, updateQuantity } =
    useCart();

  return (
    <AnimatePresence>
      {openCart && (
        <motion.div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenCart(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-full sm:w-100 h-full bg-[#FFFFFFCC] backdrop-blur-sm text-black shadow-lg flex flex-col p-6 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute self-end mb-6 text-gray-600 border p-1 rounded-sm hover:bg-[#99949480] transition-colors duration-300 cursor-pointer"
              onClick={() => setOpenCart(false)}
            >
              <IconX stroke={1} />
            </button>

            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="flex-1 overflow-y-auto space-y-4 mt-20">
                <h2 className="font-semibold text-2xl">Tu orden</h2>
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
