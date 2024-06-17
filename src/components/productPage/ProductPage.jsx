import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './ProductPage.css'

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, []);

  const [gamesSlice, setGamesSlice] = useState(12)
    const gamesToShow = products.slice(0, gamesSlice)

    const handleShowMore = () =>{
        setGamesSlice(products.length)
    }
    const handleShowLess = () =>{
        setGamesSlice(12)
    }
  // Display loading, error, or product data in JSX
  return (
    <div className='background-products'>
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
          <Button variant="dark" onClick={handleShowMore}>Mostrar Mas</Button>
        ) : (
          <Button variant="dark" onClick={handleShowLess}>Mostrar Menos</Button>
        )}

      </div>
    </div>

  );
};

export default ProductPage;
