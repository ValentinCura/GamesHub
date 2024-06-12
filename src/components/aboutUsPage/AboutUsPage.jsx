import React from 'react'
import "./AboutUsPage.css"

const AboutUsPage = () => {
  return (
    <div className='background'>
      <div className='container'>
        <div className='aboutUs'>
          <h2>Sobre Nosotros</h2>
          <p>En GamesHub, somos apasionados por los videojuegos y entendemos lo que buscan los verdaderos gamers. Nuestro objetivo es ofrecer una amplia selección de títulos, desde los más nuevos y populares hasta los clásicos inolvidables, siempre a precios competitivos. Nos enorgullece proporcionar un servicio al cliente de alta calidad y una experiencia de compra fácil y segura. Únete a nuestra comunidad y descubre tu próximo juego favorito con nosotros.</p>
        </div>
        <div className='d-flex pt-4 aboutUs'>
          <img className="imgAboutUs" src="../src/assets/img/imageCar.png" alt="" />
          <div className='visionMision'>
            <h3>Vision</h3>
            <p>Ser la tienda de referencia para los amantes de los videojuegos, reconocida por nuestra pasión, innovación y compromiso con la comunidad gamer.</p>
          </div>
        </div>
        <div className='d-flex pt-4 aboutUs'>
          <div className='visionMision'>
            <h3>Mision</h3>
            <p>Ofrecer la mejor experiencia de compra en videojuegos, brindando un catálogo variado, precios competitivos y un servicio al cliente excepcional para todos los gamers.</p>
          </div>
          <img className="imgAboutUs" src='../src/assets/img/imageCar.png' alt="" />
        </div>

      </div>
    </div>
  )
}

export default AboutUsPage