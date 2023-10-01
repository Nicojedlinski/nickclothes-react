import React from 'react'
import ComponenteII from './ComponenteII'

const ComponenteI = ({productos, admin , name}) => {
  console.log(productos)
  console.log(admin)
  return (
    <div>
      <h1>Componente1</h1>
      <h2> {name} </h2>
      {/* <ComponenteI/> */}
      <ComponenteII/>
    </div>
  )
}

export default ComponenteI