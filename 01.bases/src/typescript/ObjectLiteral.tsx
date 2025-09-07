import React from 'react'

interface Address {
  street?: string,
  city: string,
  country: string
}

interface Person {
  firstname: string
  lastname: string,
  isAlive: boolean,
  age: number,
  address: Address
}

export const ObjectLiteral: React.FC = () => {

  const person: Person = {
    firstname: 'Roman',
    lastname: 'Santillán',
    isAlive: true,
    age: 26,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
