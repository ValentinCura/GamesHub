import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ContextProvider';
import toast,{Toaster} from 'react-hot-toast';

const LoginPage = () => {
  const { username, updateUserState } = useContext(ProductContext);
  const [showPassLogin, setShowPassLogin] = useState(false);
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    username: false,
    password: false
  });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const loginUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const loggedInUser = await response.json();
      updateUserState(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      return loggedInUser;
    } catch (error) {
      toast.error('Nombre de usuario y/o contraseña incorrectos');
      throw new Error(error.message || 'Login failed');
    }
  };


  const handleRegister = () => {
    navigate("/register");
  }

  const handleShowPassLogin = () => {
    setShowPassLogin(!showPassLogin);
    passwordRef.current.type = showPassLogin ? 'password' : 'text';
  }

  const loginHandler = async (e) => {
    e.preventDefault();
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
      const userData = await loginUser({
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });
      console.log('User logged in:', userData);
      navigate("/");
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <div className='loginForm'>
      <Toaster position='bottom-right' reverseOrder={false}/>
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