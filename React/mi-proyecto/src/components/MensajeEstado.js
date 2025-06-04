import React from 'react';

function MensajeEstado({ tipo }) {
  const estilo = {
    color: tipo === 'exito' ? 'green' : 'red',
    fontWeight: 'bold'
  };

  const mensaje = tipo === 'exito' ? '¡Operación exitosa!' : 'Ha ocurrido un error.';

  return <p style={estilo}>{mensaje}</p>;
}

export default MensajeEstado;
