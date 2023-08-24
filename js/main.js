/* VARIABLES */
let contraseña = "12345";  // ***  CONTRASEÑA  ***
let miembro = false;
let elimProducto = false;
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
function membresia() {
  let esMiembro = prompt("Es miembro de nuestra tienda?: \n Responda con 1 para 'Si' y con 2 para 'No'.\n PD: contraseña:12345");

  if (esMiembro == "1") {
    for (let i = 3; i >= 0; i--) { 
      contraseñaIngresada = prompt("Introduzca su contraseña: ");
      if (contraseñaIngresada == contraseña) {
        alert("Bievenido Juan Perez! Tienes acceso a todos nuestros descuentos. Y un bono de $20.000 para tus primeras compras.");
        miembro = true;
        saldo += 20000;
        break;
      } else {
        if (i != 0){
          alert("Contraseña erronea. Le quedan " + i + " intentos.");
        }
      }
    }
    if (!miembro) {
      alert("Contraseña erronea!\n Accedera a nuestra tienda sin promociones y descuentos.");
    }
  } else {
    alert("Esta bien, accedera a nuestra tienda sin promociones y descuentos.");
  }
}

function aplicarDescuento(productos, descuento) {
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    producto.precio -= producto.precio * (descuento / 100);
  }
}

function ejecutarConMiembro(funcion) {
  if (miembro) { //aplica descuentos
    aplicarDescuento(productosNatura,20)
    funcion();
  } else { //no hay descuentos
    funcion();
  }
}

function comprarProducto() {
  let compra = parseInt(prompt("Durante esta semana tendremos a tu disposicion estos perfumes:" + productosNatura.map((el) => "\nID: " + el.id + " - " + el.nombre + " " + el.tipo).join("") + "\nSi desea comprar alguno de nuestros productos 2introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar."));

  while (compra != 0 && compra <= productosNatura.length ) {
    // ID del producto
    let productoCompradoID = productosNatura.find(el => {           //Método find
      return el.id === compra;
    });

    carrito += productoCompradoID.precio;
    listaCarrito.push(productoCompradoID);
    alert("Total del carrito: $" + carrito + " pesos.");

    compra = parseInt(prompt("Durante esta semana tendremos a tu disposicion estos perfumes:" + productosNatura.map((el) => "\nID: " + el.id + " - " + el.nombre + " " + el.tipo).join("") + "\nSi desea comprar alguno de nuestros productos 2introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar."));
  }
}

function mostrarCarrito() {
  if (listaCarrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let mensaje = "Productos en el carrito:\n";
    for (let i = 0; i < listaCarrito.length; i++) {
      mensaje += (i + 1) + ". " + listaCarrito[i] + "\n";
    }
    mensaje += "\nTotal en el carrito: $" + carrito;
    let quiereEliminarProducto = prompt(mensaje + "\nDesea eliminar algun producto? Presione '1' para Si o '2' para no.");
    switch (quiereEliminarProducto) {
      case "1":
        elimProducto = true;
        break;
      case "2":
        break;
      default:
        alert("Elija una opcion correcta.")
        break;
    }
  }
}

function eliminarProductoDelCarrito() {
  if (listaCarrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  let productoAEliminar = prompt("Ingrese el número del producto que desea eliminar del carrito:");
  if (!isNaN(productoAEliminar)) {
    productoAEliminar = parseInt(productoAEliminar);

    if (productoAEliminar >= 1 && productoAEliminar <= listaCarrito.length) {
      let productoEliminado = listaCarrito.splice(productoAEliminar - 1, 1)[0];

      let nombreProductoEliminado = productoEliminado.split(" - $")[0];

      let precioEliminado = parseFloat(productoEliminado.split(" - $")[1]);

      carrito -= precioEliminado;

      for (let i = 0; i < listaCarrito.length; i++) {
        listaCarrito[i].indice = i + 1;
      }
      alert("Se ha eliminado '" + nombreProductoEliminado  + "' del carrito.");
      elimProducto = false;
    } else {
      alert("Número de producto no válido. Por favor, ingrese un número de producto válido.");
    }
  } else {
    alert("Entrada no válida. Por favor, ingrese un número de producto válido.");
  }
}

function depositarSaldo(){
  let depositar = parseFloat(prompt("Usted tiene: " + saldo + " pesos en su cuenta. \nIntroduzca el monto que desee depositar: "));
  saldo += depositar;
  alert("Su nuevo saldo en su cuenta es de: " + saldo + " pesos.");
}

function pagarProductos() {
  let pago = prompt("Su cuenta dispone de: " + saldo + " pesos. El monto a pagar es de: " + carrito + " pesos. \nPresione '1' para pagar, '2' para volver atras o '3' para depositar en su cuenta.");
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
        alert("Pago exitoso. Su nuevo saldo en su cuenta es de: " + saldo + "pesos.");
        break;
      }
    case "2":
      break;
    case "3":
      depositarSaldo(depositar)
      break;
  }
}

/* * * * * * * CODIGO * * * * * * * */
alert("❤ Bievenido/a a Tienda NaturaForEver ❤ \nDonde cuidamos tu bolsillo 💵 y te ofrecemos la mejor calidad 👍.");

membresia()

let opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Pagar. \n 5- Salir");
while (opcion != 5) {
  switch(opcion) {
    case "1":
      if (miembro) {
        alert("Al ser miembro de ❤NaturaForEver❤ tiene un 20% de descuento.");
      } else {
        alert("Recuerda que siendo miembro de nuestra tienda podras acceder a descuentos exclusivos.");
      }
      ejecutarConMiembro(comprarProducto);
      break;

    case "2":
      mostrarCarrito();
      if (elimProducto) {
        eliminarProductoDelCarrito();
      }
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