/** pedir en el promt que indiquen la acción
 * 
 * 1.- Registrarse
 * 2.- Ver info del evento
 * 
 * 
 * 
 */

let option; 
let registration = [];
var codepromo = function() {
    
    let input = prompt("Ingresa tu código de descuento");

    while (input != "DESCUENTO50") {
         alert("El código " + input + " no es válido");
         input = prompt("Ingresa un código válido");
     }
     if (input = "DESCUENTO50") {  
         alert("Tienes $50 de descuento en tu membresía.")
     }
 }



console.log(registration);

while (option !== 0) {
    option = Number(prompt("Ingresa una opción: \n\n1.- Registrarme \n2.- Consultar mi registro \n0.- Salir "));
    switch (option) {
        case 1:
            const name = prompt("Ingresa tu nombre completo: \nDebe coincidir con tu identificación oficial");
            const email = prompt("Ingresa tu correo electrónico: \nTu entrada al evento se enviará a este correo");
            const password = prompt("Ingresa tu contraseña:");
            const promoCode = prompt("Ingresa tu código de descuento:");
            const pass = prompt("Selecciona tu paquete para el evento:\n 1.- Golden Pass:\nEntrada al evento, hospedaje en el destino, comida, bebidas, playera, vaso y parche conmemorativos.\n $3,000\n 2.- Silver Pass:\nEntrada al evento, hospedaje en el destino, comida y bebidas.\n $2,000");
            signIn(name, email, password, promoCode, pass);              
            break;
        case 2:
            alert("Seleccionaste la opción: " + option);
            break;
        case 0:
            alert("Gracias, vuelve pronto 🏍️");
            break;            

        default:
            alert("Ingresa una opción válida")
            break;
    }
}

function signIn(name, email, password, promoCode, pass) {
    registration.push(
        {
            name,
            email,
            password,
            promoCode,
            pass,
        });

        console.log(registration);


    // return "Tu registro ha sido exitoso" + nombre + correo + pass;
    
};

const compra = [
    {
        nombre: "Silver Pass",
        precio: 2000,

    },

    {
        nombre: "Código de descuento",
        precio: - 500,

    },
]

const total = compra.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

console.log("Total: $" + total);