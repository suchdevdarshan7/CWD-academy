import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Notfound from "./components/Notfound.jsx";
import "./global.css";
import FakeStore from "./components/FakeStore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <App />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar /> <Contact />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <FakeStore />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <Navbar /> <Notfound />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
