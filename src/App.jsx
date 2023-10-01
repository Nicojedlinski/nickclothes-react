import ComponenteI from "./componentes/ComponenteI"
import ComponenteA from "./componentes/ComponenteI"
import Componenten from "./componentes/ComponenteI"
import ComponenteII from "./componentes/ComponenteII"

const App = () => {

  const name = 'nickclothesInc'
  const productos = ['hombres' , 'mujeres']
  const admin = {
    nombre:'nicolas' , 
    appelido: 'jedlinski',
    edad: '23',
  }
  return (
    <>
      <div className="titulo">Nickclothes.INC</div>
      <div>Prueba 1</div>
      <div className="componenteI">
        <ComponenteI name = {name} productos = {productos} admin = {admin}/>
        {/* <ComponenteII/> */}
      </div>
    </>
  )
}

export default App
