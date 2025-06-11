import { Ejercicio01 } from "./components/Ejercicio01.jsx";
import { BotonActivar } from "./components/Utils/BotonActivar.jsx";
import { ContenedorBotones} from "./components/Utils/ContenedorBotones.jsx";

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
    </div>
    {/**Mando a llamar a mi componente externo */}

    </>
  )
}

export default App