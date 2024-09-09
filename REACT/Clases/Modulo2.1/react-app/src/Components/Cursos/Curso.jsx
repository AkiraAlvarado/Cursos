const Curso = ({titulo, subtitulo, imagen}) => {
   return(
      <div>
      <img src={imagen} alt="alt" />
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
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