import { useState } from "react"

export default function Ejercicio04() {
  //variables         
     
      //hooks
      //saludor cuando se precione el boron saludar y elimina cuando se preciona el boton eliminar saludo 
      const [saludito, setSaludo] = useState('UTSH ')
      //funciones
      const saludo = ()=>{
          setSaludo(saludito  +   'Azul')
      }
   
      const eliminasaludo = ()=>{
          setSaludo('UTSH')
      }
    return (
      <>
            <div className="row mt-4">
          <div className="col-12">
            <h2 className="h4 mt-4">
              Ejercicio 04 - Saludo
            </h2>
            <hr />
            </div>
            <div className="col-12 text-center">
              <p className="h1">{ saludito}</p>
  
              <div className="col-12 mb-5">
                  <button className="w-25 btn btn-primary text-dark fw-bold mx-2" onClick={saludo}>
                      Saludar
                  </button>
                  
                 <button className="btn btn-warning w-25 fw-bold mx-2" onClick={eliminasaludo}>
                      Elimina Saludo
                  </button>
  
              </div>
            </div>
            </div>
      </>
    )
}
