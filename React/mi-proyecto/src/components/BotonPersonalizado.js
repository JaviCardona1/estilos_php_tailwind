import React from 'react';

function BotonPersonalizado({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>;
}

export default BotonPersonalizado;
