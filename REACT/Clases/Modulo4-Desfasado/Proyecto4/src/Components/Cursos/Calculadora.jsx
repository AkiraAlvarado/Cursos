import { useState } from "react";

const Calculadora = (props) => {
   const [state, setState] = useState({
      numero_1: 0,
      numero_2: 0
   });

   return (
      <>
         <h2>{props.nombre}</h2>
         <form>
            <input 
               type="number" 
               name="numero1" 
               value={state.numero_1} 
               onChange={(e) => {
                  setState({
                     ...state,
                     numero_1: Number(e.target.value),
                  });
               }} 
            />
            <input 
               type="number" 
               name="numero2" 
               value={state.numero_2} 
               onChange={(e) => {
                  setState({
                     ...state,
                     numero_2: Number(e.target.value),
                  });
               }} 
            />
            <button type="button" onClick={() => {/* Aquí puedes agrr lógica si necesitas algo al hacer clic en el botón */}}>
               Sumar
            </button>
         </form>
         <span>Resul32o: {state.numero_1 + state.numero_2}</span>
      </>
   );
}

export default Calculadora;