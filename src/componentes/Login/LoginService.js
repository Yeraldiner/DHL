function login(usuario,contraseña){
    const logearse = {user: usuario, password: contraseña};
    console.log(logearse);
    fetch(``,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify(logearse)
    }).then( data => data.json()).then(data => {
        alert("logeado")
    })
};

function recuperar(correo){
    const correorecuperar = {correo};
    console.log(correorecuperar);
    fetch(``,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify(correorecuperar)
    }).then( data => data.json()).then(data => {
        alert("Nueva contraseña enviada a su correo")
    })
};

function validar(usuario,contraseña){
    let sw = true

    if (usuario.length < 5) {
        alert("El usuario debe tener 5 caracteres o más")
        sw = false
    }

    if (contraseña.length < 6) {
        alert("la contraseña debe tener al menos 6 caracteres")
        sw = false
    }
    if (sw){
        return true;
    }else{
        return false;
    }
};

function validarCorreo(correo){
    let sw = true

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        alert("Escriba un correo válido")
        sw = false
    }

    return sw;
};

export {login,recuperar,validar,validarCorreo};