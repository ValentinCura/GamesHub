import React, { useEffect, useRef, useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MainPage.css'
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [chevronMain, setChevronMain] = useState(false)
  const featuredRef = useRef(null)

  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate("/product");
  }

  useEffect(() => {
    chevronMain && featuredRef.current && featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    chevronMain && setChevronMain(false)
  }, [chevronMain])

  return (
    <div className='bodyBackground'>
      <div className='containerGif'>
        <img alt="" className="gif" loading="auto" src="https://i.pinimg.com/originals/44/c7/c1/44c7c1f3fbd68b2151c37af5f08198f1.gif"></img>
        <img className='welcome' src="./src/assets/img/welcome.png" alt="" />
        <div className='featured'>
          <div className='featuredScroll' onClick={() => setChevronMain(true)}>
            <p>DESTACADOS</p>
            <i className="bi bi-chevron-compact-down" />
          </div>
        </div>
      </div>

      <section className='mainSection' ref={featuredRef}>
        <p className='textFeatured'>DESTACADOS Y RECOMENDADOS</p>
        <Carousel fade className='carousel'>
          <Carousel.Item interval={5000}>
            <div className='carItem'>
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/capsule_616x353.jpg?t=1718124560" />
              <div className='carContent'>
                <h3>Call of Duty®: Black Ops 6</h3>
                <p>YA DISPONIBLE: <i className="bi bi-playstation" /> <i className="bi bi-windows" /></p>
                <p>ARS$ 105.500,12</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className='carItem'>
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/capsule_616x353.jpg?t=1717785436" alt="" />
              <div className='carContent'>
                <h3>Dead by Daylight</h3>
                <p>YA DISPONIBLE: <i className="bi bi-windows" /></p>
                <p>ARS$ 22.595,33</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className='carItem'>
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353_alt_assets_1.jpg?t=1718298543" alt="" />
              <div className='carContent'>
                <h3>Elden Ring</h3>
                <p>YA DISPONIBLE: <i className="bi bi-windows" /></p>
                <p>ARS$ 72.338,21</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <button className='productsButtton' onClick={handleViewAll}>VER TODOS</button>
      </section>
    </div>
  )
}

export default MainPage