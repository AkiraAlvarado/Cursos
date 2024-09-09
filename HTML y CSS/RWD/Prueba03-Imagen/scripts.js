/* element.style todo elemento del DOM tiene la propiedad style*/ 

Document.body.style.backgroundColor = 'red'
Document.body.style.padding = 'red'

// Forma 1: Cambiar de clase

document.body.classList.add('red')

 const size = 2 
 const styles = `
    background : green;
    color : white;
    border-radius : ${size *2}px solid black;
 `

// 1. Sobreescribiendo estilos inline existentes

document.getElementById('title').setAttribute ('style', styles)

//2. Agregando a los estilos inline existente 

document.getElementById('title').style += `;${styles}`

