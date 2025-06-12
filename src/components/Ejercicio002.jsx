//lo hice con rafc
export const Ejercicio002 = () => {
  //logica de componentes 
  //1- variable/constante
  //2- hooks
  // 3-Finciones
  const nombreproducto='Smart Tv 90';
  function agregarACarritoCompreas(){
    console.log('El producto:',
        nombreproducto, "se agrego al coarrito"
    );
  }
  function eliminarACarritoCompreas(){
    console.log('El producto:',
        nombreproducto, "se elimino del coarrito"
    );
  }


  return (
    <div className="row mt-4 ">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio002 - Boton y funciones
            </h2>
            <hr />
         </div>
        <button className="w-25 btn btn-primary mx-2" onClick={agregarACarritoCompreas} >
        <i class="bi bi-basket2"></i>
        <spn className="col-12 col-md-6 col-lg-5 mx-2 w-100">
             Agragar articulo
        </spn>
           
        </button>
        <button className="w-25 btn btn-danger mx-2" onClick={eliminarACarritoCompreas} >
        <i class="bi bi-trash3"></i>
        <spn className="col-12 col-md-6 col-lg-5 mx-2 w-100">
             Eliminar articulo
        </spn>
           
        </button>

    </div>
    
  )
}

//agragar un voton que diga eliminar boton 



export default Ejercicio002;