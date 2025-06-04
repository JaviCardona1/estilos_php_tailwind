import React, {useState} from "react";
function SeleccionGenero(){
    const [genero, setGenero] = useState('');

    return(
        <div className="col-4 border border-1 p-2">
            <h2 className="text-center">Ejercicio 5</h2>
            <select className="form-select" value={genero} onChange={(e)=>setGenero(e.target.value)}>
                <option value="">Seleccion un género</option>       
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
                </select>
                {genero && <p>Has seleccionado: {genero}</p>}


        </div>
    );
}

export default SeleccionGenero;