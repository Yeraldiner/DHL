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

export {login,recuperar};