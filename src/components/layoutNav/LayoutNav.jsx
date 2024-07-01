import React, { useContext, useEffect, useState } from 'react'
import './LayoutNav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ContextProvider';

const LayoutNav = () => {
    const [dropDownView, setDropDownView] = useState(false);
    const [scrollYstate, setScrollYstate] = useState(0);
    const { isLoggedIn,  logoutUser, setIsLoggedIn,username,userRole } = useContext(ProductContext);
    const [menuActive, setMenuActive] = useState(false);

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

    const handleBuysPage = () => {
        navigate("/buys");
    }

    const handleLoginPage = () => {
        navigate("/login");
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
        logoutUser();
        navigate("/login");
    }

    const handleDropDown = () => {
        setDropDownView(!dropDownView);
    }
    const handleUserCenter = () => {
        navigate("/user-center")
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar">
            <ul>
                <a className="navbar-item" onClick={handleHome}>
                    <img className='logo' src="./src/assets/img/LogoGamesHub.png" alt="" />
                </a>
                <li className="navbar-item navli1" onClick={handleProductsPage}>
                    <p>Productos</p>
                </li>
                <li className="navbar-item navli1" onClick={handleAboutUsPage}>
                    <p>Sobre Nosotros</p>
                </li>
            </ul>
            <ul>
                <li className="navbar-item navli2" onClick={handleBuysPage}>
                    <p><i className="bi bi-cart iconSize" /></p>
                </li>

                {isLoggedIn ?
                    (
                        <li className="navbar-item navli2">
                            <div className='infoUsers'>
                                <p>Hola, {username}</p>
                                <i className="bi bi-caret-down-fill" onClick={handleDropDown} />
                            </div>
                            {dropDownView && (


                                <div className='userOptions'>
                                    {userRole === 'sisadmin' &&
                                        <p onClick={handleUserCenter}>Centro de Usuarios</p>
                                    }
                                    <hr />
                                    <p onClick={handleLogOut}>Cerrar sesion</p>
                                </div>
                            )}
                        </li>
                    ) :
                    (
                        <li className="navbar-item navli2" onClick={handleLoginPage}>
                            <p><i className="bi bi-person-circle iconSize" />Login</p>
                        </li>
                    )}

            </ul>
            <div className='hambMenu'>

                <ul >
                    <i className="bi bi-list" onClick={toggleMenu} />
                </ul>
                {menuActive &&
                    <div className='hambList'>
                        <p onClick={handleProductsPage}>Productos</p>
                        <p onClick={handleAboutUsPage}>Sobre Nosotros</p>
                        <p onClick={handleBuysPage}><i className="bi bi-cart iconSize" /></p>
                        {isLoggedIn ?
                            (
                                <li className='liHamb'>
                                    <div >
                                        <p>Hola, {username}</p>
                                        <i className="bi bi-caret-down-fill" onClick={handleDropDown} />
                                    </div>
                                    {dropDownView && (
                                        <div>
                                            {userRole === 'sisadmin' &&
                                                <p onClick={handleUserCenter}>Centro de Usuarios</p>
                                            }
                                            <p onClick={handleLogOut}>Cerrar sesion</p>
                                        </div>
                                    )}
                                </li>
                            ) :
                            (
                                <p onClick={handleLoginPage}> <i className="bi bi-person-circle iconSize" />Login</p>
                            )}

                    </div>
                }
            </div>
        </nav>
    )
}

export default LayoutNav