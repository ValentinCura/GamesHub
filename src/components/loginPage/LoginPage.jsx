import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [errors,setErrors] = useState({
    username: false,
    password: false,
  });
  const navigate = useNavigate()


  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value){
      usernameRef.current.focus();
      setErrors({...errors, username:true})
      alert("Completaloooooooo");
      return;
    }
    if (!passwordRef.current.value){
      passwordRef.current.focus();
      setErrors({...errors, password:true})
      alert("COMPLETA");
      return;
    }
    navigate("/")
  }



  return (
    <div className='loginForm'>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3 text " controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control ref={usernameRef} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3 text" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="dark" type="submit" >
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage