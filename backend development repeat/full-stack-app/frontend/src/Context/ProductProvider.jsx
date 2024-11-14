import { createContext, useState } from "react";

export const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const responseData = await response.json();
    setProducts(responseData.data);
    console.log(data);
  }

  async function getProduct(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const responseData = await response.json();
    setProduct(responseData.data);
    console.log(data);
  }

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        getProduct,
        products,
        product,
        cart,
        setProducts,
        setProduct,
        setCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
