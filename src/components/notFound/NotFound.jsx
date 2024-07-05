import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    const navigateMain = () => {
      navigate("/");
    }
  return (
    <div className='error'>
        <img src="../src/assets/img/notFound.png" alt="" />
        <button className='backButton' onClick={navigateMain}>VOLVER A INICIO</button>
    </div>
  )
}

export default NotFound