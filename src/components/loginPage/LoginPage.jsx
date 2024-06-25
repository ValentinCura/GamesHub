import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ContextProvider';

const LoginPage = () => {
  const { loginUser } = useContext(ProductContext);
  const [showPassLogin, setShowPassLogin] = useState(false);
  const navigate = useNavigate()
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = () => {
    navigate("/register");
  }

  const handleShowPassLogin = () => {
    setShowPassLogin(!showPassLogin);
    passwordRef.current.type = showPassLogin ? 'password' : 'text';
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser({
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });
      console.log('User logged in:', userData);
      navigate("/")
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <div className='loginForm'>
      <Form onSubmit={loginHandler}>
        <h2>Iniciar Sesión</h2>
        <div className="mb-3 groupinput">
          <input type="text" ref={usernameRef} placeholder="Usuario" />
        </div>
        <div className="mb-3 groupinput passInput">
          <input type="password" ref={passwordRef} placeholder="Contraseña" />
          <i className={`bi ${showPassLogin ? 'bi-eye-slash' : 'bi-eye'}`} onClick={handleShowPassLogin} />
        </div>
        <a className='aText' href="">¿Olvidaste la contraseña?</a>
        <Button variant="dark" type="submit" className='sessionButton' >
          Iniciar Sesión
        </Button>
        <p className='registerPage' onClick={handleRegister}>¿No tienes cuenta? Registrate Aqui</p>
      </Form>
    </div>
  )
}

export default LoginPage