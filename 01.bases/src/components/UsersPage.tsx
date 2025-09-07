import React from 'react'
import { UserRow } from './UserRow'
import { useUsers } from '../hooks/useUsers'

export const UsersPage: React.FC = () => {

  const { users, nextPage, prevPage } = useUsers()

  return (
    <>
      <h3>Usuarios</h3>

      <table className='w-[500px] bg-black rounded-xl text-white'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => (
              <UserRow key={user.id} user={user} />
            ))
          }
        </tbody>
      </table>

      <div className='flex justify-between w-[500px] mt-2'>
        <button onClick={prevPage} className='cursor-pointer p-2 bg-blue-500 text-white rounded-xl'>Anteriores</button>
        <button onClick={nextPage} className='cursor-pointer p-2 bg-blue-500 text-white rounded-xl'>Siguientes</button>
      </div>
    </>
  )
}
