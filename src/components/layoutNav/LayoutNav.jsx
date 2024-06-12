import React, { useEffect, useState } from 'react'
import './LayoutNav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const LayoutNav = () => {
    const [scrollYstate, setScrollYstate] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > scrollYstate) {
                navbar.classList.add('hidden');
            } else if (window.scrollY < scrollYstate) {
                navbar.classList.remove('hidden');
            }
            setScrollYstate(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollYstate]);


    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

    const handleProductsPage = () => {
        navigate("/product");
    }

    const handleAboutUsPage = () => {
        navigate("/about-us");
    }

    const handleWishListPage = () => {
        navigate("/wish-list");
    }

    const handleBuysPage = () => {
        navigate("/buys");
    }

    const handleBuysRecordsPage = () => {
        navigate("/buys-records");
    }

    const handleLoginPage = () => {
        navigate("/login");
    }

    const handleLogOut = () => {
        setIsLogin(!isLogin);
        navigate("/");
    }

    return (
        <nav className="navbar">
            <ul>
                <a className="navbar-item" onClick={handleHome}>
                    <img className='logo' src="./src/assets/img/logo2.png" alt="" />
                </a>
                <li className="navbar-item navli1" onClick={handleProductsPage}>
                    <p>Productos</p>
                </li>
                <li className="navbar-item navli1" onClick={handleAboutUsPage}>
                    <p>Sobre Nosotros</p>
                </li>
                <li className="navbar-item navli1" onClick={handleWishListPage}>
                    <p>Lista de Deseados</p>
                </li>
            </ul>
            <ul>
                <li className="navbar-item" onClick={handleBuysPage}>
                    <p><i className="bi bi-cart iconSize" /></p>
                </li>
                <li className="navbar-item" onClick={handleLoginPage}>
                    <p><i className="bi bi-person-circle iconSize" />Login</p>
                </li>
            </ul>
        </nav>
    )
}

export default LayoutNav