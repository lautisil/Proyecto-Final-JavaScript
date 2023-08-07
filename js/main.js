// TIENDA VENTA DE NATURA
/* 
1. Panel que diga "Bievenido/a a Tienda NaturaForEver. Donde cuidamos tu bolsillo y te ofrecemos la mejor calidad."
2. Si ya eres miembro, introduce tu contraseña para acceder a ofertas exclusivas. Contraseña = 12345.
3. Panel con nuestras ofertas y opciones. Eleccion de opciones. "Salir" para terminar.
  3.1 Ofertas exclusivas por esta semana.
  3.2 Carrito.
  3.3 Eliminar articulo de carrito.
  3.4 Salir
4. Gracias vuelva pronto
*/


alert("Bievenido/a a Tienda NaturaForEver. \nDonde cuidamos tu bolsillo y te ofrecemos la mejor calidad.");

// Confirmacion si es miembro
let contraseña = "12345";
let miembro = false;

function membresia() {
  let esMiembro = prompt("Es miembro de nuestra tienda?: \n Responda con 1 para 'Si' y con 2 para 'No'.");

  if (esMiembro == "1") {
    for (let i = 3; i > 0; i--) { 
      contraseñaIngresada = prompt("Introduzca su contraseña: ");
      if (contraseñaIngresada == contraseña) {
        alert("Bievenido Juan! Tienes acceso a todos nuestros descuentos. Y un bono de $20.000 para tus primeras compras.");
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
let natRojo = 15000;
let natAzul = 12000;
let natVerde = 8000;
let natVioleta = 23000;
if (miembro) {
  natRojo *= 0.8;
  natAzul *= 0.8;
  natVerde *= 0.8;
  natVioleta *= 0.8;
}

/* SALDO */
let saldo = 0;
let carrito = 0;
if (miembro) {
  saldo += 20000;
}


let opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Salir");
while (opcion != 4) {
  switch(opcion) {
    case "1":
      let compraPerfume = prompt("Por esta semana tenemos en 20% de descuento los siguientes perfumes. \n1. Natura Rojo - " + natRojo + "\n2. Natura Azul - "+ natAzul +" \n3. Natura Verde - "+ natVerde +" \n4. Natura Violeta - " + natVioleta + "\nSi desea comprar alguno de nuestros productos introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar."  );

      while (compraPerfume != 0) {
        switch (compraPerfume) {
          case "1":
            carrito += natRojo;
            alert("Carrito: " + carrito);
            break;
          case "2":
            carrito += natAzul;
            alert("Carrito: " + carrito);
            break;
          case "3":
            carrito += natVerde;
            alert("Carrito: " + carrito);
            break;
          case "4":
           carrito += natVioleta;
           alert("Carrito: " + carrito);
           break;
          default:
            alert("Opcion no valida");
            break;
        }
        compraPerfume = prompt("Por esta semana tenemos en 20% de descuento los siguientes perfumes. \n1. Natura Rojo - " + natRojo + "\n2. Natura Azul - "+ natAzul +" \n3. Natura Verde - "+ natVerde +" \n4. Natura Violeta - " + natVioleta + "\nSi desea comprar alguno de nuestros productos introduzca el numero del articulo a continuacion: \nIntroduzca '0' para terminar de comprar."  );
      }
      break;

    case "2":
      alert("Su monto en el carrito es de: " + carrito);
      break;

    case "3":
      let depositar = prompt("Usted tiene: " + saldo + " pesos en su cuenta. \nIntroduzca el monto que desee deposita: ");
      saldo += depositar;
      alert("Su nuevo saldo en su cuenta es de: " + saldo);
      break;
    
    default:
      alert("Elija una opcion valida");

  }
  opcion = prompt("Elija lo que desee hacer a continuacion: \n 1- Comprar ofertas exclusivas de la semana. \n 2- Carrito. \n 3- Depositar. \n 4- Salir")
}