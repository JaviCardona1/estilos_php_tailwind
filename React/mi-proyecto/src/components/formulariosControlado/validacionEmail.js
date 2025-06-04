import { useState } from "react";


function ValidacionEmail(){
    const [email, setEmail] = useState('')
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // true ó false

    return(
        <div className="col-4 border border-1 p-3 rounded mt-5">
            <h2 className="text-center">Validacion Email</h2>
            <input className="form-control" type="email"
                placeholder="correo" value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            {(!esValido && email && <p style={{color:'red'}}>Correo invalido</p>)}
            {(esValido && <p style={{color:'green'}}>Correo valido</p>)}
        </div>
    )
}

export default ValidacionEmail;
