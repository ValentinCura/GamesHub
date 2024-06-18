import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './ProductPage.css'
import SearchBar from '../searchBar/SearchBar';
import FilterBar from '../filterBar/FilterBar';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [resetData, setResetData] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gamesSlice, setGamesSlice] = useState(12);



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
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [resetData]);

  const gamesToShow = products.slice(0, gamesSlice);

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
      setProducts(filteredProducts);
    }
  };
    
    const handleFilteredGames = (gameStyles) => {
      const filteredProducts = products.filter(product =>
        gameStyles.every(style => product.gameStyle.includes(style))
      );
      setProducts(filteredProducts)
    }


  


  return (
    <div className='background-products'>
      <div className='searchContainer'>
        <div className='filterBarDiv'><FilterBar products={products} onHandleFilteredGames={handleFilteredGames}/></div>
        <div className='searchBarDiv'><SearchBar onSearch={handleSearch} /> </div>
      </div>
      <div className='cardContainer'>
        {isLoading && <p>Loading products...</p>}
        {error && <p>Error: {error.message}</p>}
        {products.length > 0 && (
          gamesToShow.map((singleGame) => (
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
        {gamesToShow.length < products.length ? (
          <Button variant="dark" onClick={handleShowMore}>Mostrar Más</Button>
        ) : (
          <Button variant="dark" onClick={handleShowLess}>Mostrar Menos</Button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
