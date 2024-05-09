import React from 'react'
import './LayoutFooter.css'
const LayoutFooter = () => {
    return (
        <>
            <div class="pageFooter">
                <div class="group1">
                    <div className='logoContainer'>
                        
                        <img src="./src/assets/img/logo2.png" className='logoFooter' />
                        
                    </div>
                    <div>
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Somos una empresa que provee de videojuegos a los amantes del gaming.</p>
                    </div>
                    <div>
                        <h2>SÍGUENOS</h2>
                        <div class="socials">
                            <a href="https://www.instagram.com/g4meshub/" target='blank'><i class="bi bi-instagram"></i></a>
                            <a href="https://github.com/ValentinCura/GamesHub.git" target='blank'><i class="bi bi-github"></i></a>
                            <a href="#"><i class="bi bi-whatsapp"></i></a>
                            <a href="#"><i class="bi bi-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div class="group2">
                    <p><small>&copy;2024 </small><b>GamesHub</b> - Grupo 2.</p>
                </div>
            </div>
        </>
    )
}

export default LayoutFooter