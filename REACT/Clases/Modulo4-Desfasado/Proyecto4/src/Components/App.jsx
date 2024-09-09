import Header from "./Header/Header"
import Cuadricula from "./Cursos/Cuadricula"
import Calculadora from "./Cursos/Calculadora"
function App (){
  return(
    <>
    <Header></Header>
    <main>
      <p>Mi primer componente</p>
      <Cuadricula/>
      <Calculadora nombre="Formulario d2 suma"></Calculadora>
    </main>
    </>
  )
}

export default App