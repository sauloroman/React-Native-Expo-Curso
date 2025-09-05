import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0)
  
    const onIncrement = (value: number = 1) => {
      setCounter( Math.max(value + counter, 0) )
    }
  
    const onDecrement = (value: number = 1) => {
      if ( counter - value < 0 ) return
      setCounter( counter => counter - value )
    }
  
    const onReset = () => setCounter(0)

    return {
      counter,

      onIncrement,
      onDecrement,
      onReset
    }
}