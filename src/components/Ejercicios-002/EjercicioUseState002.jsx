import { useState } from 'react';
import { TituloEjercicio } from '../Utils/tituloEjercicio';

export const EjercicioUseState002 = () => {
  const [textoBoton, setTextoBoton] = useState('Login');
  const [iconoBtn, setIconoBtn] = useState('bi-box-arrow-in-right');

  const cambiarTextoEIconoBoton = () => {
    if (textoBoton === 'Login') {
      setTextoBoton('Cerrar Sesión');
      setIconoBtn('bi-box-arrow-in-left');
    } else {
      setTextoBoton('Login');
      setIconoBtn('bi-box-arrow-in-right');
    }
  };

  return (
    <>
      <TituloEjercicio tituloEjercicio='Ejercicio 01 - Introducción a Hook UseState' />

      <div className="col-12 text-center mb-5">
        <button
          className="btn btn-dark w-50"
          onClick={cambiarTextoEIconoBoton}
        >
          <i className={`bi ${iconoBtn}`} />
          <span className="ms-2">{textoBoton}</span>
        </button>
      </div>
    </>
  );
};
