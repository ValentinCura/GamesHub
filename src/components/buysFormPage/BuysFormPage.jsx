import React from 'react'
import { Button } from 'react-bootstrap'
import { Form, useNavigate } from 'react-router-dom'
import './BuysFormPage.css'
import { useContext } from 'react'
import { ProductContext } from '../context/ContextProvider'

const BuysFormPage = () => {
  const {setCartItems} = useContext(ProductContext)
  const navigate = useNavigate()

  const handleFinishBuy = () => {
    setCartItems([])
    navigate("/");
  }
  
  return (
    <div className='buysForm'>
      <Form>
        <h2>Formulario de compra</h2>
        <div className="mb-3 inputBuys">
          <input type="text"  placeholder="Nombre completo (nombre y apellido)"/>
        </div>
        <div className="mb-3 inputBuys" >
          <input type="text"placeholder="Numero de telefono"/>
        </div>
        <div className="mb-3 inputBuys inputCard">
          <input type="text" placeholder="Numero de la tarjeta"/>
          <input type="password" placeholder="Codigo de seguridad"/>
        </div>
        <Button variant="dark" type="submit" onClick={handleFinishBuy}>
          Finalizar compra
        </Button>
      </Form>
    </div>
  )
}

export default BuysFormPage