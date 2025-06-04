import React from 'react';
import './App.css';
import SaludoUsuario from './components/SaludoUsuario';
import Producto from './components/Producto';
import MensajeEstado from './components/MensajeEstado';
import BotonPersonalizado from './components/BotonPersonalizado';
import PerfilUsuario from './components/PerfilUsuario';
import ContadorClicks from './components/ContadorClicks';
import FormularioNombreApellido from './components/formulariosControlado/FormularioNombreApellido';
import ValidacionEmail from './components/formulariosControlado/FormularioNombreApellido';

function App() {
  const manejarClick = () => {
    alert('¡Haz hecho clic en el botón!');
  };

  const usuarioEjemplo = {
    nombre: 'Yony Arley',
    edad: 18,
    email: 'Yony@.com'
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Componentes React - Props y Estado</h1>

      <div className="card">
        <SaludoUsuario nombre="Yony" />
      </div>

      <div className="card">
        <Producto 
          nombre="Camisa Deportiva" 
          precio={29.99} 
          descripcion="Camisa cómoda y fresca para entrenar." 
        />
      </div>

      <div className="card">
        <MensajeEstado tipo="exito" />
        <MensajeEstado tipo="error" />
      </div>

      <div className="card">
        <BotonPersonalizado texto="Haz clic aquí" onClick={manejarClick} />
      </div>

      <div className="card">
        <PerfilUsuario usuario={usuarioEjemplo} />
      </div>

      <div className="card">
        <ContadorClicks />
      </div>

      <FormularioNombreApellido/>
      <ValidacionEmail/>
    </div>
  );
}

export default App;
