import React, { useContext } from 'react'
import { ProductContext } from '../context/ContextProvider';

const UserDelete = ({id}) => {

    const {setAllUsers} = useContext(ProductContext)
    const handleDeleteUser = async (id) => {
        try {
          const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Delete failed');
          }
          setAllUsers((prevUsers) => prevUsers.filter((singleUser) => singleUser.id !== id));
        } catch (error) {
          throw new Error(error.message || 'Delete failed');
        }
      };

      


  return (
    <div>
        <i class="bi bi-x-lg" onClick={() => handleDeleteUser(id)}/>
    </div>
  )
}

export default UserDelete