const Article =({props}) => {
   return (
      // a esto se le llama fragmento
      // Normalmente <> reemplaza a un article digamos, ya que solo podemos retornar una etiqueta que englobe todo
      // Pero digamos que queremos mandar 2 elementos hermanos sin padre, pues usamos <>
      // Siempre las etiquetas se cierran con / si es de una sola declaración
      //Siempre se usa className no class ya que class es palabra reservada de JS
      // enves de usar for usamos htmlF
      <> 
      <div className="article-container">
         {/* Ambos div son lo mismo */}
         <div/>
         <div>{props.title}</div>
         <h1>{props.content}</h1>
         <p></p>
         <span>
            {7 < numeroRecibido ? ( <p>Es menor</p> ) : (<p>Es mayor</p>) }
            {new Date()}
         </span>
      </div>
      <div>
         <img src="/mi-imagen.png" alt="La imagen del articulo" />
      </div>
      <form action="">
         <label htmlFor="akira"></label>
         <input type="text" name="akira" />
      </form>
      </>
   )
}

const Article2 =({title, content , img}) => {
   return (
      // a esto se le llama fragmento
      // Normalmente <> reemplaza a un article digamos, ya que solo podemos retornar una etiqueta que englobe todo
      // Pero digamos que queremos mandar 2 elementos hermanos sin padre, pues usamos <>
      // Siempre las etiquetas se cierran con / si es de una sola declaración
      //Siempre se usa className no class ya que class es palabra reservada de JS
      // enves de usar for usamos htmlF
      <> 
      <div className="article-container">
         {/* Ambos div son lo mismo */}
         <div/>
         <div></div>
         <h1>{title}</h1>
         <p>{content}</p>
         <span>
            {7 < numeroRecibido ? ( <p>Es menor</p> ) : (<p>Es mayor</p>) }
            {new Date()}
         </span>
      </div>
      <div>
         <img src={img} alt="La imagen del articulo" />
      </div>
      <form action="">
         <label htmlFor="akira"></label>
         <input type="text" name="akira" />
      </form>
      </>
   )
}
// En base a este objeto podriamos obtenemos lo de arriba
//{
//    "title" : "Mi primer articulo",
//    "content" : "Bienvenido Como estas?"
// }