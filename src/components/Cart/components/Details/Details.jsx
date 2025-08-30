import { useState } from "react";
import { useSnackbar } from "notistack";
import { useCart } from "../../../../hooks/useCart";

export const Details = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { totalPrice } = useCart();

  const [name, setName] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const deliveryFee = deliveryType === "delivery" ? 20 : 0;
  const total = totalPrice + deliveryFee;

  const handlePay = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      enqueueSnackbar("Por favor ingresa un nombre para la orden.", {
        variant: "warning",
        autoHideDuration: 2500,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }

    if (!deliveryType) {
      enqueueSnackbar("Selecciona un tipo de entrega.", {
        variant: "warning",
        autoHideDuration: 2500,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }

    if (deliveryType === "delivery" && !address.trim()) {
      enqueueSnackbar("Ingresa la dirección para el envío.", {
        variant: "warning",
        autoHideDuration: 2500,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }

    if (!paymentMethod) {
      enqueueSnackbar("Selecciona un método de pago.", {
        variant: "warning",
        autoHideDuration: 2500,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }

    enqueueSnackbar("¡Orden lista para procesar! 🎉", {
      variant: "success",
      autoHideDuration: 2500,
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });

    // Aquí podrías redirigir o hacer el checkout real
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 space-y-5">
      <h3 className="text-xl font-bold text-gray-800">Detalles de la Orden</h3>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          ¿Para quién es la orden?
        </label>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg py-2 px-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Tipo de entrega</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setDeliveryType("pickup")}
            className={`py-2 px-3 rounded-full border transition cursor-pointer ${
              deliveryType === "pickup"
                ? "bg-primary border-amber-200 text-white"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Pasar por él
          </button>
          <button
            type="button"
            onClick={() => setDeliveryType("delivery")}
            className={`py-2 px-3 rounded-full border transition cursor-pointer ${
              deliveryType === "delivery"
                ? "bg-primary border-amber-200 text-white"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Envío a domicilio
          </button>
        </div>
      </div>

      {deliveryType === "delivery" && (
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Dirección</label>
          <input
            type="text"
            placeholder="Calle, número, colonia..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg py-2 px-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />
          <span className="text-xs italic">
            +20 pesos extra por entrega a domicilio
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Método de pago</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setPaymentMethod("cash")}
            className={`py-2 px-3 rounded-full border transition cursor-pointer ${
              paymentMethod === "cash"
                ? "bg-primary border-amber-200 text-white"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Efectivo
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("transfer")}
            className={`py-2 px-3 rounded-full border transition cursor-pointer ${
              paymentMethod === "transfer"
                ? "bg-primary border-amber-200 text-white"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Transferencia
          </button>
        </div>
      </div>

      <hr className="text-gray-500/20" />

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Entrega</span>
          <span className="font-semibold">${deliveryFee}</span>
        </div>

        <hr className="text-gray-500/20" />

        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${total}</span>
        </div>

        <button
          type="button"
          onClick={handlePay}
          className="bg-black text-white text-center py-2 rounded-lg hover:bg-black/80 transition cursor-pointer"
        >
          Pagar
        </button>
      </div>
    </div>
  );
};
