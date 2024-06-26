import React, { useContext } from 'react'
import './BuysPage.css'
import { ProductContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const BuysPage = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const navigate = useNavigate()

  const formatPrice = (price) => {
    return price.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const calculateTotal = () => {
    if (cartItems && cartItems.length > 0) {
      return formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
    }
    return 0;
  };

  const handleDeleteCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    toast.success('Producto eliminado del carrito');
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleBackToProd = () => {
    navigate("/product");
  }

  const handleProceedPayment = () => {
    navigate("/buys-form");
  }


  return (
    <div className='cartPage'>
      <Toaster position='bottom-right' reverseOrder={false} />
      <h2>TU CARRITO</h2>
      <section className='sectionCart'>
        <div>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className='cartItemStyle' key={item.id}>
                <i className="bi bi-x eliminateX" onClick={() => handleDeleteCartItem(item.id)} />
                <img src={item.gameImgUrl} alt="" />
                <div className='cardInfo'>
                  <h3>{item.gameName}</h3>
                  <p>{item.console}</p>
                  <div className='productInfo'>
                    <div className='quantity'>
                      <i className="bi bi-chevron-left" onClick={() => handleDecreaseQuantity(item.id)} />
                      <p>{item.quantity}</p>
                      <i className="bi bi-chevron-right" onClick={() => handleIncreaseQuantity(item.id)} />
                    </div>
                    <p>ARS$ {formatPrice(item.price)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>NO HAY PRODUCTOS EN EL CARRITO</p>
          )}
        </div>
        <div className='totalsDiv'>
          {calculateTotal() === 0 ? (

            <>
              <p>TOTAL DE PRODUCTOS: ARS$ {calculateTotal()} </p>
              <button onClick={handleBackToProd}>AGREGAR PRODUCTOS</button>
            </>

          ) : (
            <>
              <p>TOTAL DE PRODUCTOS: ARS$ {calculateTotal()} </p>
              <button onClick={handleProceedPayment}>PROCEDER CON EL PAGO</button>
            </>
          )}


        </div>
      </section>
    </div>
  )
}

export default BuysPage