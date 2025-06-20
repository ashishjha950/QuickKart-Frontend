import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalProvider from "./context/GlobalProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import CheckoutProvider from "./context/CheckoutProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";


createRoot(document.getElementById("root")).render(
  <>
    <CheckoutProvider>
      <GlobalProvider>
        <CartProvider>
          <AuthProvider>
            <GoogleOAuthProvider clientId="704328663681-ap5s1vjkllmh5u4a2e7ki2q50kt3oivs.apps.googleusercontent.com">
            <App />
            </GoogleOAuthProvider>
          </AuthProvider>
        </CartProvider>
      </GlobalProvider>
    </CheckoutProvider>
    <ToastContainer position="top-left" autoClose={1000} />
  </>
);
