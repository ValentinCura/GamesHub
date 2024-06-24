import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import './BuysFormPage.css'

const BuysFormPage = () => {
  return (
    <div className='buysForm'>
      <Form>
        <h2>Formulario de compra</h2>
        <div className="mb-3 inputBuys" controlId="formBasicData">
          <input type="text"  placeholder="Nombre completo (nombre y apellido)" />
        </div>
        <div className="mb-3 inputBuys" controlId="formBasicPhone">
          <input type="text"placeholder="Numero de telefono" />
        </div>
        <div className="mb-3 inputBuys inputCard" controlId="formBasicCard">
          <input type="text" placeholder="Numero de la tarjeta" />
          <input type="password" placeholder="Codigo de seguridad" />
        </div>
        <Button variant="dark" type="submit" >
          Finalizar compra
        </Button>
      </Form>
    </div>
  )
}

export default BuysFormPage