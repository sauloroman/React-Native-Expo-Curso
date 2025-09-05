import React from 'react'

const addTwoNumbers = ( num1: number, num2: number ): number => num1 + num2

export const BasicFunctions: React.FC = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar 2 + 8 = {addTwoNumbers(2, 98)}</span>
    </>
  )
}
