import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './UserModify.css'
import { ProductContext } from '../context/ContextProvider'
const UserModify = ({id}) => {
    const {setAllUsers} = useContext(ProductContext)
    const [selectedRole, setSelectedRole] = useState('');
    const handleSelectRol = async (event) => {
        const newRole = event.target.value;
        setSelectedRole(newRole);
    
        const partialUserData = {
            rol: newRole
        };
    
        try {
            const updatedUser = await updateUser(id, partialUserData);
            console.log('Usuario actualizado:', updatedUser);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    const updateUser = async (userId, partialUserData) => {
        try {
          const response = await fetch(`http://localhost:8000/users/${userId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(partialUserData),
          });
          if (!response.ok) {
            throw new Error('Update failed');
          }
          const updatedUser = await response.json();
          setAllUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === id ? { ...user, ...partialUserData } : user
            )
          );
          return updatedUser;
        } catch (error) {
          throw new Error(error.message || 'Update failed');
        }
      };


    return (
        <div className='formModifyUser'>

            <Form.Select aria-label="Rol" defaultValue="" onChange={handleSelectRol}>
                <option value="" disabled>
                    Cambiar Rol
                </option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
            </Form.Select>
        </div>
    )
}

export default UserModify