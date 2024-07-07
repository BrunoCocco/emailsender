const mostrarTarjetas = () => {

    let datoguardado = JSON.parse(localStorage.getItem("dato"));

    const STORAGE = []
    STORAGE.push(datoguardado);
    console.log(STORAGE)

    let div = document.getElementById("cards-container")
    console.log(div)

    // Limpiar el contenedor antes de agregar nuevas tarjetas
    div.innerHTML = '';

    // Recorrer el array de objetos y crear una tarjeta para cada uno
    datoguardado.forEach(email => {
        // Crear una tarjeta en forma de string HTML
        let cardHTML = `
            <div>
                <div class="confirm-container">
                    <h2>Destinatario: ${email.destino}</h2>
                    <h4>Correo: ${email.correo}</h4>
                    <h2>Texto del Email: ${email.textoEmail}</h2>
                </div>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        div.innerHTML += cardHTML;
    });

}

mostrarTarjetas();
