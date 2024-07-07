/* Email sender */
const EMAIL = [];

class CorreoEmail {
    constructor(destino,correo,textoEmail){
        this.destino = destino,
        this.correo = correo,
        this.textoEmail = textoEmail
    }
}

const enviar = document.getElementById("enviar");

const EnviarCorreo = () =>{

    let destino = document.getElementById("destinatario").value;
    let correo = document.getElementById("email").value;
    let textoEmail = document.getElementById("textoEmail").value;
    console.log(destino)
    console.log(correo)
    console.log(textoEmail)

    let nuevoitem = new CorreoEmail(destino,correo,textoEmail)
    EMAIL.push(nuevoitem)
    console.log(EMAIL)

    localStorage.setItem("dato", JSON.stringify(EMAIL))

    chequeoStorage();
    
}

function chequeoStorage() {
    let datoguardado = JSON.parse(localStorage.getItem("dato"));
    console.log(datoguardado)
}

enviar.addEventListener("click", EnviarCorreo)