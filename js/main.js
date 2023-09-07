import Swal from 'sweetalert2'
/* VARIABLES */
let saldo = 0;
let carrito = 0;

/* CLASS Y OBJETOS */
class Producto {
  constructor(id, nombre, tipo, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
    this.stock = stock;
  };
};

const perfumeRojo = new Producto(1, "Perfume", "Rojo", 20000, 5);
const perfumeAzul = new Producto(2, "Perfume", "Azul", 15000, 8);
const cremaVerde = new Producto(3, "Crema", "Verde", 10000, 12);
const cremaVioleta = new Producto(4, "Crema", "Violeta", 6000, 23);

/* ARRAYS */
const listaCarrito = [];
const productosNatura = [perfumeRojo, perfumeAzul, cremaVerde, cremaVioleta]

/* FUNCIONES */
function agregarAlCarrito(producto) {
  carrito += producto.precio;
  listaCarrito.push(producto);
  alert("Producto agregado al carrito: " + producto.nombre + " " + producto.tipo);
}

document.addEventListener("DOMContentLoaded", () => {
  const botonesCompra = document.querySelectorAll(".btn-submit");

  botonesCompra.forEach((boton, index) => {
      boton.addEventListener("click", () => {
          agregarAlCarrito(productosNatura[index]);
          
      });
  });
});

function mostrarCarrito() {
  if (listaCarrito.length === 0) {
      Swal.fire({
          icon: 'error',
          title: 'No hay nada en el carrito.',
      })
  } else {
      let mensaje = "Productos en el carrito:\n";
      mensaje += listaCarrito.map((el) => {
          return "ID: " + el.id + " - " + el.nombre + " " + el.tipo + "- $" + el.precio + " pesos.";
      }).join("\n")
      mensaje += "\n\nTotal en el carrito: $" + carrito + " pesos.";

      // Mostrar los productos en el div "carritoContenedor"
      const carritoContenedor = document.getElementById("carritoContenedor");
      carritoContenedor.innerHTML = mensaje;

      let quiereEliminarProducto = prompt(mensaje + "\nDesea eliminar algun producto? Presione '1' para Si o '2' para no.");
      switch (quiereEliminarProducto) {
          case "1":
              eliminarProductoDelCarrito();
              break;
          case "2":
              break;
          default:
              alert("Elija una opción correcta.")
              break;
      }
  }
}

// Agregar un evento de clic al enlace "Carrito"
var carritoLink = document.getElementById("#carrito");
carritoLink.addEventListener("click", mostrarCarrito());

const clickboton = document.getElementsByClassName(".btn-submit");
clickboton.addEventListener("click", () => {
  alert("HI")
})

function eliminarProductoDelCarrito() {
  if (listaCarrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  let productoAEliminar = parseInt(prompt("Ingrese el número de ID del producto que desea eliminar del carrito:"));
  const IDProductoBorrado = listaCarrito.findIndex(el => el.id === productoAEliminar);
  if (IDProductoBorrado != -1) {
    carrito -= listaCarrito[IDProductoBorrado].precio;
    alert("Producto: " + listaCarrito[IDProductoBorrado].nombre + " " + listaCarrito[IDProductoBorrado].tipo + " borrado con exito.")
    listaCarrito.splice(IDProductoBorrado,1);
  } else {
    alert("Producto no encontrado.")
  }
}

function depositarSaldo(){
  let depositar = parseFloat(prompt("Usted tiene: $" + saldo + " pesos en su cuenta. \nIntroduzca el monto que desee depositar: "));
  saldo += depositar;
  alert("Su nuevo saldo en su cuenta es de: $" + saldo + " pesos.");
}

function pagarProductos() {
  let pago = prompt("Su cuenta dispone de: $" + saldo + " pesos. El monto a pagar es de: $" + carrito + " pesos. \nPresione '1' para pagar, '2' para volver atras o '3' para depositar en su cuenta.");
  switch(pago) {
    case "1":
      if (carrito > saldo) {
        alert("El saldo en su cuenta es inferior al monto que tiene en el carrito. Deposite plata.");
        break;
      } else if (carrito <= 0){
        alert("No tiene nada en el carrito para pagar.");
        break;
      } else {
        saldo -= carrito;
        listaCarrito.length = 0;
        carrito = 0;
        alert("Pago exitoso. Su nuevo saldo en su cuenta es de: $" + saldo + " pesos.");
        break;
      }
    case "2":
      break;
    case "3":
      depositarSaldo()
      break;
  }
}

/* * * * * * * CODIGO * * * * * * * */
let opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Pagar. \n 5- Salir");
while (opcion != 5) {
  switch(opcion) {
    case "1":
      ejecutarConMiembro(comprarProducto);
      break;

    case "2":
      mostrarCarrito();
      break;

    case "3":
      depositarSaldo();
      break;

    case "4":
      pagarProductos();
      break;

    default:
      alert("Elija una opcion valida.");
      break;

  }
  opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Pagar. \n 5- Salir");
}