import { useState } from "react";

export const Ejercicio03 = () => {
    //variables         
   
    //hooks
    const [numerito, setNumerito] = useState(0)
    //funciones
    const sumar = ()=>{
        setNumerito(numerito + 1)
    }
        const restar = ()=>{
        setNumerito(numerito -1)
    }
    const Reiniciar = ()=>{
        setNumerito(0)
    }
  return (
    <>
          <div className="row mt-4">
        <div className="col-12">
          <h2 className="h4 mt-4">
            Ejercicio 03 - Funciones - contador
          </h2>
          <hr />
          </div>
          <div className="col-12 text-center">
            <p className="h1">{numerito}</p>

            <div className="col-12 mb-5">
                <button className="w-25 btn btn-primary text-dark fw-bold mx-2" onClick={sumar}>
                    sumar
                </button>
                <button className="btn btn-warning w-25 fw-bold mx-2 " onClick={restar}>
                    restar
                </button>
                                <button className="btn btn-warning w-25 fw-bold mx-2" onClick={Reiniciar}>
                    Reiniciar
                </button>

            </div>
          </div>
          </div>
    </>
  )
}