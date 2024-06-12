import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/register");
}

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value) {
      usernameRef.current.focus();
      setErrors({ ...errors, username: true })
      alert("Completaloooooooo");
      return;
    }
    if (!passwordRef.current.value) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true })
      alert("COMPLETA");
      return;
    }
    navigate("/")
  }

  return (
    <div className='loginForm'>
      <Form onSubmit={loginHandler}>
        <h2>Iniciar Sesión</h2>
        <div className="mb-3 groupinput" controlId="formBasicEmail">
          <input type="text" ref={usernameRef} placeholder="Usuario" name="" id="" />
        </div>
        <div className="mb-3 groupinput" controlId="formBasicEmail">
          <input type="text" ref={passwordRef} placeholder="Contraseña" name="" id="" />
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