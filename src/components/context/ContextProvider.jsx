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
  const [allUser, setAllUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [resetUsers, setResetUsers] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [errorUsers, setErrorUsers] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('')



  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser);
      setIsLoggedIn(true);
      setUserRole(parsedUser.rol);
      setUsername(parsedUser.username);
    }
  }, [])

  const updateUserState = (loggedInUser) => {
    setUser(loggedInUser);
    setIsLoggedIn(true);
    setUserRole(loggedInUser.rol);
    setUsername(loggedInUser.username);
  };



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
        }));
        setUser(userMapped);
        setAllUsers(userMapped)
      } catch (error) {
        console.error('Error fetching users:', error);
        setErrorUsers(error.message);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsers();
  }, [resetUsers]);

  const logoutUser = () => {
    setUser(null);
    setIsLoggedIn(false);
    setUserRole('');
    setUsername('');
    localStorage.removeItem('user');
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Delete failed');
      }
      setAllUsers((prevUsers) => prevUsers.filter((singleUser) => singleUser.id !== id));
    } catch (error) {
      throw new Error(error.message || 'Delete failed');
    }
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

  const addNewProduct = async (productData) => {
    try {
      const lastProductId = products.length > 0 ? products[0].id : 0;
      const newProductId = lastProductId + 1;
      const productDataId = { ...productData, id: newProductId };
      const response = await fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDataId),
      });
      if (!response.ok) {
        throw new Error('Add failed');
      }
      const newProduct = await response.json();
      setProducts((prevProducts) => [newProduct, ...prevProducts]);
      return newProduct;
    } catch (error) {
      throw new Error(error.message || 'Add failed');
    }
  };

  const updateProduct = async (id, partialProductData) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partialProductData),
      });
      if (!response.ok) {
        throw new Error('Update failed');
      }
      const updatedProduct = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...partialProductData } : product
        )
      );
      return updatedProduct;
    } catch (error) {
      throw new Error(error.message || 'Update failed');
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Delete failed');
      }
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      throw new Error(error.message || 'Delete failed');
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
        allUser,
        isLoadingUsers,
        errorUsers,
        setResetProducts,
        setResetUsers,
        setAllUsers,
        updateUserState,
        isLoggedIn,
        logoutUser,
        deleteUser,
        setIsLoggedIn,
        addNewProduct,
        updateProduct,
        deleteProduct,
        username,
        userRole,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
