function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const contraseña = document.getElementById('contraseña').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const guardarDatos = document.getElementById('guardarDatos').checked;

    const datos = {
        nombre,
        apellido,
        contraseña,
        email,
        telefono
    };

    if (guardarDatos) {
        localStorage.setItem('datosUsuario', JSON.stringify(datos));
    } else {
        sessionStorage.setItem('datosUsuario', JSON.stringify(datos));
    }
}

function cargarDatos() {
    const datosGuardados = localStorage.getItem('datosUsuario');

    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        document.getElementById('nombre').value = datos.nombre;
        document.getElementById('apellido').value = datos.apellido;
        document.getElementById('contraseña').value = datos.contraseña;
        document.getElementById('email').value = datos.email;
        document.getElementById('telefono').value = datos.telefono;
    }
}

window.addEventListener('load', cargarDatos);

document.getElementById('miFormulario').addEventListener('submit', guardarDatos());