import { useState, useEffect } from "react";

const Calculado2 = ({ nombre }) => {
  const [state, setState] = useState({
    numero1: 0,
    numero2: 0,
  });

  const [texto, setTexto] = useState("");

 // El useEfect, el primer parametro es función
   // Simula el ciclo de vida del componemte, construye , renderiza, avisa que renderizo y se desmonta
   // UseEfdfect se ejecuta cuando el componente va a ser construido y se ejecuta cada vezs que el componente cambia

   // El segundo parametros es un array opcional
   // El array será el listado de todos los estados que quiero controlar como disparadores de la función
   // que escribi en mi userEfet

   // EN resumen , quiero que este useEfect , se dispare cuando estos estados [] se actualicen

   // Si no ponemos [] se disparara la funcuión con cualquier cambio de estado
   // SE ejecuta 1 vez cuando se construye, 1 cuando se acutaliza 1 componente u cuando cualquier estado, depende y al final cuando se desmonte
  useEffect(() => {
    // Simplemente logueamos el cambio de texto
    console.log("Texto ha cambiado:", state);
    return () => {
      // Aquui poner lo que quieres cuando se desmonte 
    }
  }, [state]);

  // Use ref la fdorma en la que controlamos el DOOM
  // En react se renderiza ebn un doom virtual, copia del doom original, así no se actualiza todo el doom, sino en el virtual doom y recien manda al doom original

  const setNumero = (e) => {
   setState({
     ...state,
     numero1: Number(e.target.value),
   });
 };
 
 const setNumero2 = (e) => {
   setState({
     ...state,
     numero2: Number(e.target.value),
   });
 };


  return (
    <>
      <h1>Ayuden</h1>
      <h2>{nombre}</h2>
      <form>
        <input type="number" name="numero1" value={state.numero1} onChange={setNumero} />
        <input type="number" name="numero2" value={state.numero2} onChange={setNumero2} />
        <button
          type="button"
          onClick={() => {
            /* Aquí puedes agregar lógica si necesitas algo al hacer clic en el botón */
          }}
        >
          Sumar
        </button>
      </form>
      <p>{state.numero1}</p>
      <span></span>
      <p>{state.numero2}</p>
      <span>{state.numero1 * state.numero2}</span>
      {/* Asegúrate de que el valor del input esté vinculado con el estado */}
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <span>{texto}</span>
    </>
  );
};

export default Calculado2;