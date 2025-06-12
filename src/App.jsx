import { Ejercicio01 } from "./components/Ejercicio01.jsx";
import { BotonActivar } from "./components/Utils/BotonActivar.jsx";
import { ContenedorBotones} from "./components/Utils/ContenedorBotones.jsx";
import { Ejercicio002 } from "./components/Ejercicio002.jsx";
import { Ejercicio03 } from "./components/Ejercicio03.jsx";
import Ejercicio04 from "./components/Ejercicio04.jsx";


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
    <Ejercicio01></Ejercicio01>
    <BotonActivar></BotonActivar>
    <ContenedorBotones></ContenedorBotones>
    <Ejercicio002></Ejercicio002>
   <Ejercicio03></Ejercicio03>
   <Ejercicio04></Ejercicio04>
    </div>
    {/**Mando a llamar a mi componente externo */}

    </>
  )
}

export default App