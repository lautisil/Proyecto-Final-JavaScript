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
function miembro(esMiembro) {
  esMiembro = prompt("Es miembro de nuestra tienda?:")
  switch (esMiembro) {
    case "Si":
      for (let i=3 ; i>=0 ; i--) ;
        contraseñaIngresada = prompt("Introduzca su contraseña: ");
        if (contraseñaIngresada == contraseña) {
        alert("Bievenido Juan!");
        miembro = True;
      } else {
        alert("Contraseña erronea. Le quedan " + i + " intentos.");
      }
    case "No":
      break;
  }
  
}

miembro()

