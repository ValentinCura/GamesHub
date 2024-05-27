import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './LayoutNav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const LayoutNav = () => {
    const [lightmode, setLightMode] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    const handleChangeLight = () => {
        setLightMode(!lightmode);
    };

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

    const handleLogin = () => {
        setIsLogin(!isLogin);
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='fullNav'>
                <Container fluid className='containerNav p-0'>
                    <Navbar.Brand onClick={handleHome}>
                        <img src="./src/assets/img/logo2.png" height='40' width='40' className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav" className='navCollapse justify-content-md-center'>
                        <Nav className="me-auto navCenter">
                            <Nav.Link onClick={handleProductsPage}>Productos</Nav.Link>
                            <Nav.Link onClick={handleAboutUsPage}>Sobre Nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={handleWishListPage}>Lista de Deseados</Nav.Link>
                            <Nav.Link onClick={handleChangeLight}>
                                {lightmode ? (<i class="bi bi-moon iconSize"></i>) : (<i class="bi bi-moon-fill iconSize"></i>)}
                            </Nav.Link>
                            <Nav.Link onClick={handleBuysPage}>
                                <i class="bi bi-cart iconSize"></i>
                            </Nav.Link>
                            {isLogin ? <NavDropdown title={<i class="bi bi-person-circle iconSize"></i>} id="dropdown-button-dark-example1" align="end">
                                <NavDropdown.Item onClick={handleBuysRecordsPage}>Compras</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogOut}>
                                    Cerrar Sesion
                                </NavDropdown.Item>
                            </NavDropdown> : <Nav.Link onClick={handleLoginPage} className='d-flex'>
                                <i class="bi bi-person-circle iconSize" onClick={handleLogin}> Login</i>
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default LayoutNav