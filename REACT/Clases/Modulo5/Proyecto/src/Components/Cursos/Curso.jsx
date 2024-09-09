// Nos permite crear una ref. al doom
import { useRef} from "react";

import "./Curso.css"
const Curso = ({titulo, subtitulo, imagen}) => {
   const miReferencia = useRef(null)

   const desactivarImagen = () => {
      miReferencia.current.classList.toggle("desactivada")
   }
   // NOTA el use State sirve para guardar estados , digamos que en un estado inicial , noahy cursos,y ahora que agregar un curso
   // Con un metodo , se agrega uncurso , es decir el estado de renderizado cambio
   return(
      <div>
      <img ref={(miReferencia)} src={imagen} alt="alt" />
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
      <button onClick ={desactivarImagen}>Desactivar</button>
    </div>
   )
}

export default Curso
// Props es un objeto , y obtendra 3 valores

// props
// {
//    titulo: "Dasasda",
//    subtitulo : "sasasa",
//    imagen = "Sdasdas"
// }