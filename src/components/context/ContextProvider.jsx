import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resetData, setResetData] = useState(false)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8000/products', {
          headers: {
            accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const productData = await response.json();
        const productMapped = productData.map((product) => ({
          ...product,
        })).sort((a, b) => b.id - a.id);
        setProducts(productMapped);
        // setFilteredProducts(productMapped);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [resetData]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ProductContext.Provider value={{ products, isLoading, error, cartItems, addToCart, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;