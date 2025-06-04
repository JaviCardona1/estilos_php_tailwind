import React, {useState} from "react";

function LoginSimple(){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [mensaje, setMensaje] = useState("")

    function ManejadorLogin(){
        const usuarioLimpio = usuario.trim()
        const passwordLimpia = password.trim()

        if(!usuarioLimpio || !passwordLimpia){
            setMensaje('Por favor, completa todos los campos')
            return
        }
        if (usuarioLimpio.length < 4) {
            setMensaje('El nombre de usuario debe tener al menos 4 caracteres')
            return
        }
        
        if (passwordLimpia.length < 6) {
            setMensaje ('la contraseña debe tener al menos 6 caracteres');
            return;
        }

        const regexPasswordFuerte = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!regexPasswordFuerte.test (passwordLimpia)) {
            setMensaje ('La contraseña debe tener al menos una mayuscula, un número y un simbolo');
            return;
        }
        setMensaje('Bienvenido $(usuarioLimpio}');
        setUsuario('')
        setPassword('')        

    }
    return(
        <div classname="col-3 border border-2 rounded-2 mt-3 p-2 shadow-lg bg-light ">
            <h2>Login</h2>
            <input type= "text" className="form-control mb-2" placeholder="Usuario" value={usuario} on onChange={(e)=>setUsuario(e.target.value)}></input>
            <input type="password" className="from-control mb-2" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button className="btn btn-primary" onClick={ManejadorLogin}>Iniciar Sesion</button>
            <p>{mensaje}</p>
        </div>
    )
}
export default LoginSimple;