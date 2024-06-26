import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { ProductContext } from '../context/ContextProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { setAllUsers } = useContext(ProductContext);
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({
    email: false, 
    username: false,
    password: false
  })
  const navigate = useNavigate()

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const newUser = await response.json();
      setAllUsers((prevUsers) => [...prevUsers, newUser]);
      return newUser;
    } catch (error) {
      toast.error('Nombre de usuario y/o email ya existente');
      throw new Error(error.message || 'Registration failed');
    }
  };

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
    if (!emailRef.current.value){
      emailRef.current.focus();
      setErrors({...errors, email:true})
      toast.error('Complete todos los campos!');
      return;
    }
    if (!usernameRef.current.value){
      usernameRef.current.focus();
      setErrors({...errors, username:true})
      toast.error('Complete todos los campos!');
      return;
    }
    if (!passwordRef.current.value){
      passwordRef.current.focus();
      setErrors({...errors, password:true})
      toast.error('Complete todos los campos!');
      return;
    }
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
      <Toaster position='bottom-right' reverseOrder={false}/>
      <Form onSubmit={registerHandler}>
        <h2>Registrarse</h2>
        <div className="mb-3 groupInputReg">
          <input type="email" ref={emailRef} placeholder="Email"/>
        </div>
        <div className="mb-3 groupInputReg">
          <input type="text" ref={usernameRef} placeholder="Usuario"/>
        </div>
        <div className="mb-3 groupInputReg inputPass" >
          <input type="password" ref={passwordRef} placeholder="Contraseña"/>
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