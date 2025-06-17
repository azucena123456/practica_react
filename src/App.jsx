import { Ejercicio01 } from "./components/Ejercicio01.jsx"; 
import { BotonActivar } from "./components/Utils/BotonActivar.jsx";
import { ContenedorBotones } from "./components/Utils/ContenedorBotones.jsx"; 
import { Ejercicio002 } from "./components/Ejercicio002.jsx"; 
import { Ejercicio03 } from "./components/Ejercicio03.jsx"; 
import Ejercicio04 from "./components/Ejercicio04.jsx"; 
import { EjercicioUseState001 } from './components/Ejercicios-002/EjercicioUseState001.jsx'; // Ejercicio que usa el hook useState
//import { EjercicioUseState002 } from './components/Ejercicios-002/EjercicioUseState002.jsx'; // Ejercicio que usa el hook useState
import { Ejercicio00 } from "./components/Ejercicios-002/Ejercicio00.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              Hola UTSH😎(❁´◡`❁)╰(°▽°)╯
            </h1>
          </div>
        </div>
          <Ejercicio01 />  
          <BotonActivar></BotonActivar>
          <Ejercicio002/>
          <ContenedorBotones/>
          <Ejercicio03></Ejercicio03>   
          <Ejercicio04/>
          <EjercicioUseState001/>
          
          <Ejercicio00/>

      </div>
    </>
  );
}

export default App;
