import { useState } from "react";

function FormularioNombreApellido() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    return (
        <div className="col-4 border border-1 rounded p-2">
            <h2 className="text-center">Registro</h2>
            <input type="text" className="form-control mb-2" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <input type="text" className="form-control mb-2" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <p>Hola, {nombre} {apellido}</p>
        </div>
    );
}

export default FormularioNombreApellido;