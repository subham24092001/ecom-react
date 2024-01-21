import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// CSS
import "./index.css";
// context
import { CartProvider, ProductProvider, SidebarProvider } from "./contexts";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  </ThemeProvider>
);
