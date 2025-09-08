import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('0')
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator>(Operator.add)

  useEffect(() => {
    // TODO: Calcular su resultado
    setFormula(number)
  }, [number])

  const clean = () => {
    setNumber('0')
    setPrevNumber('0')
    setFormula('0')
    lastOperation.current = Operator.add
  }

  const toggleSign = () => {
    if ( number.includes('-') ) {
      return setNumber( number.replace('-', '' ) )
    }

    setNumber('-' + number)
  }

  const deleteLast = () => {
    
  }

  const buildNumber = ( numberString: string ) => {
    
    // Verificar si ya existe el punto decimal
    if ( number.includes('.') && numberString === '.' ) return

    if ( number.startsWith('0') || number.startsWith('-0') ) {
      if ( numberString === '.' ) return setNumber(number + numberString)
        
      if ( numberString === '0' && number.includes('.') ) return setNumber(number + numberString)

      //Evaluar si es diferente de cero, no hay punto y es el primer número
      if ( numberString !== '0' && !number.includes('.') ) {
        return setNumber(numberString)
      }

      //Evitar el 000000000
      if ( numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    setNumber( number + numberString )
  }

  return {
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign
  }

}