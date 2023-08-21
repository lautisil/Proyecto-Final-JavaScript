alert("❤ Bievenido/a a Tienda NaturaForEver ❤ \nDonde cuidamos tu bolsillo 💵 y te ofrecemos la mejor calidad 👍.");

// Confirmacion si es miembro
let contraseña = "12345";  // ***  CONTRASEÑA  ***
let miembro = false;

function membresia() {
  let esMiembro = prompt("Es miembro de nuestra tienda?: \n Responda con 1 para 'Si' y con 2 para 'No'.");

  if (esMiembro == "1") {
    for (let i = 3; i > 0; i--) { 
      contraseñaIngresada = prompt("Introduzca su contraseña: ");
      if (contraseñaIngresada == contraseña) {
        alert("Bievenido Juan Perez! Tienes acceso a todos nuestros descuentos. Y un bono de $20.000 para tus primeras compras.");
        miembro = true;
        break;
      } else {
        alert("Contraseña erronea. Le quedan " + i + " intentos.");
      }
    }
  } else {
    alert("Esta bien, accedera a nuestra tienda sin promociones y descuentos.");
  }
}


membresia()

/* PRODUCTOS */
class producto {                                            //OBJETO
  constructor(nombre, tipo, precio, stock) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
    this.stock = stock;
  }
  esMiembro() {
    return this.precio *= 0.8;
  }
}

const perfumeRojo = new producto("Perfume", "Rojo", 20000, 5);
const perfumeAzul = new producto("Perfume", "Azul", 15000, 8);
const cremaVerde = new producto("Crema", "Verde", 10000, 12);
const cremaVioleta = new producto("Crema", "Violeta", 6000, 23);

/* SALDO / CARRITO / STOCK */
let saldo = 0;
let carrito = 0;
if (miembro) { //saldo como miembro
  saldo += 20000;
}
const listaCarrito = [] //Array


let opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Pagar. \n 5- Salir");
while (opcion != 5) {
  switch(opcion) {
    case "1":
      if (miembro) {
        alert("Al ser miembro de ❤NaturaForEver❤ tiene un 20% de descuento.")
      } else {
        alert("Recuerda que siendo miembro de nuestra tienda podras acceder a descuentos exclusivos.")
      }
      let compraPerfume = prompt("Durante esta semana tendremos a tu disposicion estos perfumes: \n1. Natura Rojo - " + perfumeRojo.esMiembro + "\n2. Natura Azul - "+ perfumeAzul.precio +" \n3. Natura Verde - "+ cremaVerde.precio +" \n4. Natura Violeta - " + cremaVioleta.precio + "\nSi desea comprar alguno de nuestros productos introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar.");

      while (compraPerfume != 0) {
        switch (compraPerfume) {
          case "1":
            carrito += perfumeRojo.precio;
            listaCarrito.push("\n"+ perfumeRojo.precio +" "+ perfumeRojo.tipo);
            alert("Carrito: " + carrito);
            break;
          case "2":
            carrito += perfumeAzul.precio;
            listaCarrito.push("\n"+ perfumeAzul.nombre +" "+ perfumeAzul.tipo);
            alert("Carrito: " + carrito);
            break;
          case "3":
            carrito += cremaVerde.precio;
            listaCarrito.push("\n"+ cremaVerde.nombre +" "+ cremaVerde.tipo);
            alert("Carrito: " + carrito);
            break;
          case "4":
           carrito += cremaVioleta.precio;
           listaCarrito.push("\n"+ cremaVioleta.nombre +" "+ cremaVioleta.tipo);
           alert("Carrito: " + carrito);
           break;
          default:
            alert("Opcion no valida");
            break;
        }
        compraPerfume = prompt("Durante esta semana tendremos a tu disposicion estos perfumes: \n1. Natura Rojo - " + perfumeRojo.precio + "\n2. Natura Azul - "+ perfumeAzul.precio +" \n3. Natura Verde - "+ cremaVerde.precio +" \n4. Natura Violeta - " + cremaVioleta.precio + "\nSi desea comprar alguno de nuestros productos introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar.");
      }
      break;

    case "2":
      alert("Su monto en el carrito es de: " + carrito + "\nCantidad de productos: " + listaCarrito.length + ".\n" + listaCarrito);
      break;

    case "3":
      let depositar = parseFloat(prompt("Usted tiene: " + saldo + " pesos en su cuenta. \nIntroduzca el monto que desee depositar: "));
      saldo += depositar;
      alert("Su nuevo saldo en su cuenta es de: " + saldo);
      break;

    case "4":
      let pago = prompt("Su cuenta dispone de: " + saldo + " pesos. El monto a pagar es de: " + carrito + " pesos. \nPresione '1' para pagar, '2' para volver atras o '3' para depositar en su cuenta.");
      switch(pago) {
        case "1":
          if (carrito > saldo) {
            alert("El saldo en su cuenta es inferior al monto que tiene en el carrito. Deposite plata.")
            continue;
          } else if (carrito == 0){
            alert("No tiene nada en el carrito para pagar.")
            break;
          } else {
            saldo -= carrito
            carrito = 0
            alert("Su nuevo saldo en su cuenta es de: " + saldo);
            break;
          }
        case "2":
          break;
        case "3":
          let depositar = parseFloat(prompt("Usted tiene: " + saldo + " pesos en su cuenta. \nIntroduzca el monto que desee depositar: "));
          saldo += depositar;
          alert("Su nuevo saldo en su cuenta es de: " + saldo);
          continue;
      }
      break;

    default:
      alert("Elija una opcion valida.");
      break;

  }
  opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Pagar. \n 5- Salir");
}