import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

interface IButtonProps {
  onClick: () => void,
  children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={ () => onClick() } className='bg-amber-200 font-bold w-30 py-2 rounded-4xl cursor-pointer hover:bg-amber-300 transition-colors'>
      {children}
    </button>
  )
}

export const Counter: React.FC = () => {

  const { counter, onDecrement, onIncrement, onReset } = useCounter()

  return (
    <>
      <h3 className='text-indigo-500 text-2xl'>Contador: <span className='font-bold'>{counter}</span></h3>

      <div className='flex gap-5 my-5'>
        <Button onClick={onIncrement}>+1</Button>
        <Button onClick={onReset}>Reset</Button>
        <Button onClick={onDecrement}>-1</Button>
      </div>
    </>
  )
}
