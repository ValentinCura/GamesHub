import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { ProductContext } from '../context/ContextProvider';

const Register = () => {
  const { registerUser } = useContext(ProductContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleShowPass = () => {
    setShowPass(!showPass);
    passwordRef.current.type = showPass ? 'password' : 'text';
  }

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = await registerUser({
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        rol: 'client',
      });
      navigate("/login") 
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  return (
    <div className='registerForm'>
      <Form onSubmit={registerHandler}>
        <h2>Registrarse</h2>
        <div className="mb-3 groupInputReg" controlId="formBasicEmail">
          <input type="email" ref={emailRef} placeholder="Email" name="" id=""  />
        </div>
        <div className="mb-3 groupInputReg" controlId="formBasicUser">
          <input type="text" ref={usernameRef} placeholder="Usuario" name="" id=""  />
        </div>
        <div className="mb-3 groupInputReg inputPass" controlId="formBasicPass">
          <input type="password" ref={passwordRef} placeholder="Contraseña" name="" id=""  />
          <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`} onClick={handleShowPass} />
        </div>
        <Button variant="dark" type="submit" className='sessionButton' >
          Registrarse
        </Button>
        <p className='loginPage' onClick={handleLogin}>¿Ya tienes una cuenta? Inicia Sesion Aqui</p>
      </Form>
    </div>
  )
}

export default Register