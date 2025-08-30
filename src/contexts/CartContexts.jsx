import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (p) =>
          p.id === item.id &&
          (p.selectedSauce || null) === (item.selectedSauce || null)
      );

      if (exists) {
        return prev.map((p) =>
          p.id === item.id &&
          (p.selectedSauce || null) === (item.selectedSauce || null)
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          item.id !== itemToRemove.id ||
          (item.selectedSauce || null) !== (itemToRemove.selectedSauce || null)
      )
    );
  };

  const updateQuantity = (itemToUpdate, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemToUpdate.id &&
        (item.selectedSauce || null) === (itemToUpdate.selectedSauce || null)
          ? { ...item, qty }
          : item
      )
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
