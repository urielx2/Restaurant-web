import { IconShoppingCart } from "@tabler/icons-react";

export const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <IconShoppingCart size={80} stroke={1} />
      <span>Tu carro está vacío</span>
    </div>
  );
};
