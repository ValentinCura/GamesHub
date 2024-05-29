import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
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
      alert("Completar username!");
      return;
    }
    if (!passwordRef.current.value) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true })
      alert("Completar contraseña!");
      return;
    }
    if (!emailRef.current.value){
      emailRef.current.focus();
      setErrors({...errors, email: true})
      alert("Completar email!");
      return;
    }
    navigate("/")
  }

  return (
    <div className='loginForm'>
      <Form onSubmit={loginHandler}>
        <h2>Registrarse</h2>
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
          <Form.Control ref={usernameRef} type="text" placeholder="Username" className='text' />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Contraseña" className='text' />
        </Form.Group>
        <Form.Group className="mb-3 formGroup">
          <Form.Control ref={emailRef} type="email" placeholder='Email' className='text'></Form.Control>
        </Form.Group>
        <Button variant="dark" type="submit" className='sessionButton' >
          Crear cuenta
        </Button>
        <a href="">¿Ya tienes una cuenta, inicia sesión?</a>
      </Form>
    </div>
  )
}

export default Register