import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import './ProductPage.css'
import SearchBar from '../searchBar/SearchBar';
import FilterBar from '../filterBar/FilterBar';
import { ProductContext } from '../context/ContextProvider'
import Abm from '../abm/Abm';

const ProductPage = () => {
  const { products, isLoading, error, addToCart, user, isLoggedIn, updateProduct, deleteProduct, userRole } = useContext(ProductContext);
  const [gamesSlice, setGamesSlice] = useState(12);
  const [totalProducts, setTotalProducts] = useState(products)
  const [formBM, setFormBM] = useState(false)
  const [modifyForm, setModifyForm] = useState(false)
  const [modifyProductData, setModifyProductData] = useState(null);
  const [newPrice, setNewPrice] = useState(0)
  const [newImage, setNewImage] = useState('')



  useEffect(() => {
    setTotalProducts(products.slice(0, gamesSlice));

  }, [gamesSlice, products])

  const handleShowMore = () => {
    setGamesSlice(products.length);
  };

  const handleShowLess = () => {
    setGamesSlice(12);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setResetData(!resetData)
    }
    else {
      const filteredProducts = products.filter(
        (product) =>
          product.gameName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTotalProducts(filteredProducts);
    }
  };

  const handleFilteredGames = (gameStyles, console) => {
    let filteredProducts = products
    if (console.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        console.includes(product.console)
      );
    }

    if (gameStyles.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        gameStyles.every(style => product.gameStyle.includes(style)))

    }
    setTotalProducts(filteredProducts)
  }

  const handleBM = () => {
    setFormBM(!formBM)
  }

  const modifyProduct = (product) => {
    setModifyForm(!modifyForm)
    setModifyProductData(product);
    setNewPrice(product.price);
    setNewImage(product.gameImgUrl);
  }

  const handleShowModify = () => {
    setModifyForm(!modifyForm)
  }

  const handleNewPrice = (e) => {
    setNewPrice(e.target.value)
  }

  const handleNewImage = (e) => {
    setNewImage(e.target.value)
  }

  const onHandleModify = (e) => {
    e.preventDefault()
    const modifyData = {
      price: newPrice,
      gameImgUrl: newImage,
    }
    updateProduct(modifyProductData.id, modifyData);
    setModifyForm(false);
    setModifyProductData(null);

  }




  return (
    <div className='background-products'>
      <div className='searchContainer'>
        <div className='filterBarDiv'><FilterBar onHandleFilteredGames={handleFilteredGames} /></div>
        <div className='searchBarDiv'><SearchBar onSearch={handleSearch} /> </div>
      </div>
      <div className='cardContainer'>
        {isLoading && <p>Cargando productos...</p>}
        {error && <p>Error: {error.message}</p>}
        {products.length > 0 && (
          totalProducts.map((singleGame) => (
            <Card key={singleGame.id} className='cardProductsCard'>
              <Card.Img
                variant="top"
                src={singleGame.gameImgUrl}
                className='imgCard'
              />
              <Card.Body>
                <div className='overlay'>
                  {isLoggedIn && (userRole === 'admin' || userRole === 'sisadmin') && (
                    <div>
                      <i className="bi bi-three-dots" onClick={handleBM}></i>
                      {formBM && (
                        <div>
                          <button className='addToCart' onClick={() => deleteProduct(singleGame.id)}>ELIMINAR</button>
                          <button className='addToCart' onClick={() => modifyProduct(singleGame)}>MODIFICAR</button>
                        </div>
                      )}
                    </div>
                  )}

                  <p>{singleGame.console}</p>
                  <button className='addToCart' onClick={() => addToCart(singleGame)}>AGREGAR AL CARRITO</button>
                </div>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="textTitleCard">{singleGame.gameName}</ListGroup.Item>
                  <ListGroup.Item className="textTitleCard">${singleGame.price}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ))
        )}
        {totalProducts.length === 0 && (
          <h2>No hay productos</h2>
        )}
      </div>
      {isLoggedIn && (userRole === 'admin' || userRole === 'sisadmin') && (
        <Abm />
      )}
      <div className='buttonShow'>
        {totalProducts.length < products.length ? (
          <Button variant="dark" onClick={handleShowMore}>Mostrar Más</Button>
        ) : (
          <Button variant="dark" onClick={handleShowLess}>Mostrar Menos</Button>
        )}
      </div>
      {modifyForm &&
        <div className='formModify'>
          <i className="bi bi-x-lg" onClick={handleShowModify} />
          <Form onSubmit={onHandleModify}>
            <h2>Modificar producto</h2>
            <div className="mb-3 inputModify" controlId="formBasicPrice">
              <input type="number" placeholder="Nuevo Precio" onChange={handleNewPrice} />
            </div>
            <div className="mb-3 inputModify" controlId="formBasicImage">
              <input type="text" placeholder="Nueva imagen" onChange={handleNewImage} />
            </div>
            <Button variant="dark" type="submit" >
              Guardar cambios
            </Button>
          </Form>
        </div>

      }
    </div>
  );
};

export default ProductPage;
