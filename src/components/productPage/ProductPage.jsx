import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './ProductPage.css'
import SearchBar from '../searchBar/SearchBar';
import FilterBar from '../filterBar/FilterBar';
import {ProductContext} from '../context/ContextProvider'

const ProductPage = () => {
  const {products, isLoading, error} = useContext(ProductContext);
  const [gamesSlice, setGamesSlice] = useState(12);
  const [totalProducts, setTotalProducts] = useState(products)

  

  useEffect(()=>{
    setTotalProducts(products.slice(0, gamesSlice));

  },[gamesSlice])

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
    
    const handleFilteredGames = (gameStyles) => {
      const filteredProducts = products.filter(product =>
        gameStyles.every(style => product.gameStyle.includes(style))
      );
      setTotalProducts(filteredProducts)
    }


    
    

  return (
    <div className='background-products'>
      <div className='searchContainer'>
        <div className='filterBarDiv'><FilterBar onHandleFilteredGames={handleFilteredGames}/></div>
        <div className='searchBarDiv'><SearchBar onSearch={handleSearch} /> </div>
      </div>
      <div className='cardContainer'>
        {isLoading && <p>Loading products...</p>}
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
                <p className='overlay'>{singleGame.console}</p>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="textTitleCard">{singleGame.gameName}</ListGroup.Item>
                  <ListGroup.Item className="textTitleCard">${singleGame.price}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
      <div className='buttonShow'>
        {totalProducts.length < products.length ? (
          <Button variant="dark" onClick={handleShowMore}>Mostrar Más</Button>
        ) : (
          <Button variant="dark" onClick={handleShowLess}>Mostrar Menos</Button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
