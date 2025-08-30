import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContexts.jsx";
import { SnackbarProvider } from "notistack";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <App />
        </SnackbarProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
