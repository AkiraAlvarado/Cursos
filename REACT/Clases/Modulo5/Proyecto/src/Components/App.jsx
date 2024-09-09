import Header from "./Header/Header"
import Cuadricula from "./Cursos/Cuadricula"
import Calculado2 from "./Cursos/Calculado2"
function App (){
  return(
    <>
    <Header></Header>
    <main>
      <p>Mi primer componente</p>
      <Cuadricula/>
      <Calculado2 nombre="Formulario USE EFEECT y USE STATE suma"></Calculado2>

    </main>
    </>
  )
}

export default App