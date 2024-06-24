import React, { useContext, useEffect, useState } from 'react'
import './UserCenterPage.css'
import { ProductContext } from '../context/ContextProvider';

const UserCenterPage = () => {
  const { isLoggedIn, allUser, deleteUser, userRole } = useContext(ProductContext);

  const filteredUsers = allUser.filter((singleUser) => singleUser.rol === 'client');


  console.log(allUser)

  return (
    <div className='userCenterBackground'>
      {isLoggedIn && userRole === 'sisadmin' ? (
        filteredUsers.length > 0 && (
          filteredUsers.map((singleUser) => (
            <div className='userDiv' key={singleUser.id}>
              <p>ID: {singleUser.id}</p>
              <p>NOMBRE DE USUARIO: {singleUser.username}</p>
              <p>EMAIL DEL USUARIO: {singleUser.email}</p>
              <i className="bi bi-x" onClick={() => deleteUser(singleUser.id)} />
            </div>
          ))
        )
      ) : (
          <div>
            <img src="https://i.pinimg.com/564x/c7/ba/8f/c7ba8fcaea49141457aea3797fbea5a4.jpg" alt="" />
          </div>
      )}
    </div>
  );
}

export default UserCenterPage