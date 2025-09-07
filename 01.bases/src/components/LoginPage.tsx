import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export const LoginPage: React.FC = () => {
  const { user, isChecking, isAuthenticated, loginWithEmailPassword, logout } = useAuthContext()
  
  if (isChecking) {
    return <h3>Checking authentication...</h3>
  }

  return (
    <>
    {
      isAuthenticated 
      ? (
        <>
          <h3>Bievenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={ logout } className='bg-blue-500 p-2 text-white rounded-xl mt-2'>Salir</button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>
          <button onClick={() => loginWithEmailPassword("roman@correo.com", "123abc")} className='bg-blue-500 p-2 text-white rounded-xl mt-2'>Ingresar</button>
        </>
      )
    }
    </>
  )
}
