import React, { useEffect, useRef, useState } from 'react'
import "./AboutUsPage.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

const AboutUsPage = () => {
  const [chevron, setChevron] = useState(false)
  const charRef = useRef(null)

  useEffect(() => {
    chevron && charRef.current && charRef.current.scrollIntoView({ behavior: 'smooth' });
    chevron && setChevron(false)
  }, [chevron])



  return (
    <>
      <div className='background'>
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_231x87.jpg?t=1717672601" className="img1 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/capsule_231x87.jpg?t=1718138209" class="img2 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_231x87.jpg?t=1714502360" class="img3 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_231x87.jpg?t=1717530666" class="img4 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/capsule_231x87.jpg?t=1716985808" class="img5 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/capsule_231x87.jpg?t=1718124560" class="img6 shadowPosition" />
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/capsule_231x87_latam.jpg?t=1717530114" class="img7 shadowPosition" />


        <section className='aboutUs'>
          <img src="./src/assets/img/LogoGamesHub.png" alt="" />
          <div className='texts'>
            <p>Ofrecemos una amplia selección de videojuegos, desde nuevos lanzamientos hasta clásicos, a precios competitivos. Brindamos un servicio al cliente de alta calidad y una experiencia de compra fácil y segura.</p>
            <div className='visionMision'>
              <div>
                <h2>Misión</h2>
                <p>Ofrecer la mejor experiencia de compra en videojuegos, brindando un catálogo variado y un servicio excepcional.</p>
              </div>
              <div>
                <h2>Visión</h2>
                <p>Ser la tienda de referencia para los amantes de los videojuegos, reconocida por nuestra pasión, innovación y compromiso con la comunidad.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='moreInfo'>
          <p>MÁS INFORMACIÓN</p>
          <div className='animate' onClick={() => setChevron(true)}><i className="bi bi-chevron-compact-down"></i></div>
        </section>
      </div>
      <section className='characteristics' ref={charRef}>
        <div className="charCards">
          <div className='iconDiv'><i className="bi bi-clock-history" /></div>
            <h3>Acceso anticipado a juegos</h3>
            <p>Descubre, juega e involúcrate con juegos mientras evolucionan. Sé el primero en obtener información sobre las próximas novedades y en formar parte del proceso.</p>
        </div>
        <div className="charCards ">
          <div className='iconDiv'><i className="bi bi-phone" /></div>
          <h3>Disponiblidad móvil</h3>
          <p>Accede a GamesHub en cualquier lugar desde tu dispositivo iOS o Android.</p>
        </div>
        <div className="charCards">
          <div className='iconDiv'><i className="bi bi-credit-card" /></div>
          <h3>Compras simples</h3>
          <p>Nuestro sitio está diseñado para que encuentres y compres lo que necesitas con la mayor facilidad. Navegar por nuestras categorías y productos es sencillo e intuitivo.</p>
        </div>
        <div className="charCards">
          <div className='iconDiv'><i className="bi bi-controller" /></div>
          <h3>Diversidad de plataformas</h3>
          <p>Ofrecemos juegos para todas las plataformas acutales.</p>
        </div>


      </section>
    </>
  )

}

export default AboutUsPage