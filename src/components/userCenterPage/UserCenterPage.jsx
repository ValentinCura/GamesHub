import React, { useContext, useEffect, useState } from 'react';
import './UserCenterPage.css';
import { ProductContext } from '../context/ContextProvider';
import UserModify from '../userModify/UserModify';
import UserDelete from '../userDelete/UserDelete';
import NotFound from '../notFound/NotFound';

const UserCenterPage = () => {
  const { isLoggedIn, allUser,  userRole } = useContext(ProductContext);
  const [modifyUserId, setModifyUserId] = useState(null);
  const filteredUsers = allUser.filter((singleUser) => singleUser.rol !== 'sisadmin');
  

  const handleModifyUser = (id) => {
    setModifyUserId((prevUserId) => (prevUserId === id ? null : id));
    
  };

  return (
    <div className='userCenterBackground'>
      {isLoggedIn && userRole === 'sisadmin' && filteredUsers.length > 0 ? (
        filteredUsers.map((singleUser) => (
          <div className='userDiv' key={singleUser.id}>
            <p>ID: {singleUser.id}</p>
            <p>NOMBRE DE USUARIO: {singleUser.username}</p>
            <p>EMAIL DEL USUARIO: {singleUser.email}</p>
            <p>ROL: {singleUser.rol}</p>
            <i
              className={modifyUserId === singleUser.id ? "bi bi-chevron-compact-up" : "bi bi-chevron-compact-down"}
              onClick={() => handleModifyUser(singleUser.id)}
            />
            <UserDelete id = {singleUser.id}/>
            {modifyUserId === singleUser.id && <UserModify id = {singleUser.id}/>}
            
            

          </div>
        ))
      ):(<NotFound/>)}
    </div>
  );
};

export default UserCenterPage;
