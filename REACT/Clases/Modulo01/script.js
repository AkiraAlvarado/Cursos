const createElement = (elemento, atributos = {}) => {
  const elem = document.createElement(elemento);
  let keys = Object.keys(atributos);
  keys.map(k => elem.setAttribute(k, atributos[k]));
  return elem
}

const render = (contenido, elementoRaiz) => {
  let elemRaiz = document.getElementById(elementoRaiz)
  elemRaiz.appendChild(contenido)
}

const Header = createElement("header", { "id": "EDteam", "class": "main-header header" })
render(Header, "root")