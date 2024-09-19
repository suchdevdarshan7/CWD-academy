import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Product from "./Components/Product.jsx";
import Admin from "./Components/Admin.jsx";
import Form from "./Components/Form.jsx";

const routerInstance = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/admin/:slug",
    element: <Admin />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerInstance}>
      <App />
    </RouterProvider>
  </StrictMode>
);
