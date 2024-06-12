import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleShowPass = () =>{
    setShowPass(!showPass);
    passwordRef.current.type = showPass ? 'password' : 'text';
  }

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const registerHandler = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value) {
      usernameRef.current.focus();
      setErrors({ ...errors, username: true })
      alert("Completar username!");
      return;
    }
    if (!passwordRef.current.value) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true })
      alert("Completar contraseña!");
      return;
    }
    if (!emailRef.current.value) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true })
      alert("Completar email!");
      return;
    }
    navigate("/")
  }

  return (
    <div className='registerForm'>
      <Form onSubmit={registerHandler}>
        <h2>Registrarse</h2>
        <div className="mb-3 groupInputReg" controlId="formBasicEmail">
          <input type="email" ref={emailRef} placeholder="Email" name="" id="" />
        </div>
        <div className="mb-3 groupInputReg" controlId="formBasicUser">
          <input type="text" ref={usernameRef} placeholder="Usuario" name="" id="" />
        </div>
        <div className="mb-3 groupInputReg inputPass" controlId="formBasicPass">
          <input type="password" ref={passwordRef} placeholder="Contraseña" name="" id=""/>
          <i className={`bi ${showPass ? 'bi-eye-slash': 'bi-eye'}`} onClick={handleShowPass}/>
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