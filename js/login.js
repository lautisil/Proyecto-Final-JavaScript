const inputNombre = document.querySelector("#nombre"),
    inputEmail = document.querySelector("#email"),
    inputContraseña = document.querySelector("#contraseña"),
    check = document.querySelector("#checkbox"),
    formRegistro = document.querySelector("#formRegistro"),
    inputEmailCliente = document.querySelector("#emailCliente"),
    inputContraseñaCliente = document.querySelector("#contraseñaCliente"),
    formIngreso = document.querySelector("#formIngreso");

function Registro() {
    const datos = {
        Nombre: inputNombre.value,
        Email: inputEmail.value,
        Contraseña: inputContraseña.value,
    }

    if (check.checked) {
        localStorage.setItem("datosUsuario", JSON.stringify(datos));
        alert("ok")
    } else {
        sessionStorage.setItem("datosUsuario", JSON.stringify(datos));
        alert("okey")
    }
}

function Ingreso() {
    const datosGuardados = localStorage.getItem('datosUsuario');

    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        const emailClienteInput = document.getElementById('emailCliente');
        const contraseñaClienteInput = document.getElementById('contraseñaCliente');

        if (emailClienteInput.value === datos.Email && contraseñaClienteInput.value === datos.Contraseña) {
            window.location.href = "http://127.0.0.1:5500/Javascript/ProyectoFinal01/pages/principal.html";

        } else {
            alert('Los datos no son correctos.');
        }
    }
}

formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    Registro();
})

formIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
    Ingreso();
})
