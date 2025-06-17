import React, { useState } from 'react';

export const Ejercicio00 = () => {
  const [textoTitulo, setTextoTitulo] = useState('Hola Alumnos UTSH');
  const [parrafo, setParrafo] = useState('Este es un parrafo de ejemplo');
  const [montoBeca, setMontoBeca] = useState('1500');
  const [colorTexto, setColorTexto] = useState('black');
  const [tachado, setTachado] = useState(false);

  const cambiarContenido = () => {
    setTextoTitulo('Holaaaaaaaa');
    setParrafo('Este es mi trabajo.');
    setMontoBeca('2500');
  };

  const cambiarColor = () => {
    setColorTexto(prevColor => (prevColor === 'red' ? 'black' : 'red'));
  };

  const toggleTachado = () => setTachado(!tachado);

  return (
    <div className="container mt-4 mb-5">
      <h2 style={{ color: colorTexto }}>{textoTitulo}</h2>
      <p
        style={{
          color: colorTexto,
          textDecoration: tachado ? 'line-through' : 'none',
        }}
      >
        {parrafo}
      </p>
      <p style={{ color: colorTexto }}>Monto de beca: ${montoBeca}</p>

      <button className="btn btn-primary me-2" onClick={cambiarContenido}>
        Cambiar contenido
      </button>

      <button className="btn btn-danger me-2" onClick={cambiarColor}>
        {colorTexto === 'red' ? 'Volver a negro' : 'Cambiar a rojo'}
      </button>

      <button className="btn btn-secondary" onClick={toggleTachado}>
        {tachado ? 'Quitar tachado' : 'Tachar párrafo'}
      </button>
    </div>
  );
};
