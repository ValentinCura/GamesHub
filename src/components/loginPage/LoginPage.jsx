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
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
          <Form.Control ref={usernameRef} type="text" placeholder="Username" className='text' />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Contraseña" className='text' />
        </Form.Group>
        <Button variant="dark" type="submit" className='sessionButton' >
          Iniciar Sesión
        </Button>
        <a href="">¿Olvidaste la contraseña?</a>
      </Form>
    </div>
  )
}

export default LoginPage