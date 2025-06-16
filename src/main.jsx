import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalProvider from "./context/GlobalProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import CheckoutProvider from "./context/CheckoutProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CheckoutProvider>
      <GlobalProvider>
        <CartProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CartProvider>
      </GlobalProvider>
    </CheckoutProvider>
  </StrictMode>
);
