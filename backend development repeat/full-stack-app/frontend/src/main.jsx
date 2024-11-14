import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginProvider from "./Context/LoginProvider.jsx";
import Register from "./Components/Register.jsx";
import ProductProvider from "./Context/ProductProvider.jsx";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";
import Product from "./Components/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </LoginProvider>
  </StrictMode>
);
