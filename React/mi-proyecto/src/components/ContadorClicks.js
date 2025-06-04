import React, { useState } from 'react';

function ContadorClicks() {
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador de Clics</h2>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={manejarClick}>Haz clic</button>
    </div>
  );
}

export default ContadorClicks;
