import React from 'react';

function Producto({ nombre, precio, descripcion }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{nombre}</h3>
      <p><strong>Precio:</strong> ${precio}</p>
      <p>{descripcion}</p>
    </div>
  );
}

export default Producto;
