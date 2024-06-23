import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ContextProvider';

const LoginPage = () => {
  const { loginUser } =  useContext(ProductContext);
  const navigate = useNavigate()
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = () => {
    navigate("/register");
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
        <div className="mb-3 groupinput" controlId="formBasicUsername">
          <input type="text" ref={usernameRef} placeholder="Usuario"/>
        </div>
        <div className="mb-3 groupinput" controlId="formBasicPassword">
          <input type="text" ref={passwordRef} placeholder="Contraseña"/>
          <a className='aText' href="">¿Olvidaste la contraseña?</a>
        </div>
        <Button variant="dark" type="submit" className='sessionButton' >
          Iniciar Sesión
        </Button>
        <p className='registerPage' onClick={handleRegister}>¿No tienes cuenta? Registrate Aqui</p>
      </Form>
    </div>
  )
}

export default LoginPage