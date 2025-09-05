import React from 'react'

export const BasicTypes: React.FC = () => {

  const name: string = "Roman"
  const age: number = 26
  const isActive: boolean = false

  const powers: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
      <h3>Tipos Básicos</h3>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>

      <ul>
        {
          powers.map((power, i) => (
            <li key={i}>{power}</li>
          ))
        }
      </ul>
    </>
  )
}
