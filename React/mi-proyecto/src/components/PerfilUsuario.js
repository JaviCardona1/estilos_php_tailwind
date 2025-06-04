import React from 'react';

function PerfilUsuario({ usuario }) {
  return (
    <div style={{ border: '1px solid #000', padding: '15px', width: '250px' }}>
      <h3>{usuario.nombre}</h3>
      <p><strong>Edad:</strong> {usuario.edad}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
    </div>
  );
}

export default PerfilUsuario;
