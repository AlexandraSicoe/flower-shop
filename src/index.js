import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import "./index.css";
import OrderForm from "./components/OrderForm";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="cart-page" element={<Cart />} />
        <Route path="order-form" element={<OrderForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#FAA0A0	 ",
          100: "#FAA0A0	 ",
          200: "#FAA0A0	 ",
          300: "#FAA0A0	 ",
          400: "#FAA0A0	 ",
          500: "#FAA0A0	 ",
          600: "#FAA0A0	 ",
          700: "#FAA0A0	 ",
          800: "#FAA0A0	 ",
          900: "#FAA0A0	 ",
        },
        secondary: {
          50: "#b999cc ",
          100: "#F8C8DC	 ",
          200: "#b999cc ",
          300: "#b999cc ",
          400: "#b999cc ",
          500: "#b999cc ",
          600: "#b999cc ",
          700: "#b999cc ",
          800: "#b999cc ",
          900: "#b999cc ",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: "#FAA0A0	",
          50: "#FAA0A0	",
          200: "#FAA0A0	 ",
          300: "#FAA0A0	",
          400: "#FAA0A0	",
          500: "#FAA0A0	",
          600: "#FAA0A0	",
          700: "#FAA0A0	",
          800: "#FAA0A0	",
          900: "#FAA0A0	",
        },
        secondary: {
          50: "#E0BFB8	 ",
          100: "#E0BFB8	 ",
          200: "#E0BFB8	 ",
          300: "#E0BFB8	 ",
          400: "#E0BFB8	 ",
          500: "#E0BFB8	 ",
          600: "#E0BFB8	 ",
          700: "#E0BFB8	 ",
          800: "#E0BFB8	 ",
          900: "#E0BFB8	 ",
        },
      },
    },
  },
  Typography: {
    fontFamily: "Fasthand, Belanosima",
  },
});
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

reportWebVitals();
