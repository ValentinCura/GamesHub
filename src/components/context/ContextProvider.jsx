import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [errorProducts, setErrorProducts] = useState(null);
  const [resetProducts, setResetProducts] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [resetUsers, setResetUsers] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [errorUsers, setErrorUsers] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoadingProducts(true);
      setErrorProducts(null);

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
      } catch (error) {
        console.error('Error fetching products:', error);
        setErrorProducts(error.message);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [resetProducts]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoadingUsers(true);
      setErrorUsers(null);

      try {
        const response = await fetch('http://localhost:8000/users', {
          headers: {
            accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        const userMapped = userData.map((user) => ({
          ...user,
        })).sort((a, b) => b.id - a.id);
        setUser(userMapped);
      } catch (error) {
        console.error('Error fetching users:', error);
        setErrorUsers(error.message);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsers();
  }, [resetUsers]);

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const newUser = await response.json();
      setUser(newUser);
      return newUser;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  };

  const loginUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const loggedInUser = await response.json();
      setUser(loggedInUser);
      setIsLoggedIn(true);
      return loggedInUser;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

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
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        isLoadingProducts,
        errorProducts,
        cartItems,
        addToCart,
        setCartItems,
        user,
        isLoadingUsers,
        errorUsers,
        setResetProducts,
        setResetUsers,
        registerUser,
        loginUser,
        isLoggedIn,
        logoutUser,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
