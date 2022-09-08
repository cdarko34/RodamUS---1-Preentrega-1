const paquetes = [
    {
        nombre: "Golden Pass",
        caracteristicas: "Entrada al evento, hospedaje en el destino, comida, bebidas, playera, vaso y parche conmemorativos",
        precio: "3000",

    },
    {
        nombre: "Silver Pass",
        caracteristicas: "Entrada al evento, hospedaje en el destino, comida y bebidas.",
        precio: "2000",

    },

];

const precios = [3000, 2000];





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





const nombre = prompt ("Ingresa tu nombre:")
const correo = prompt ("Ingresa tu correo electrónico:")
const contraseña = prompt ("Ingresa tu contraseña:")
// codepromo();






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




/**Al ingresar el código de descuento se indica el monto total con el descuento aplicado
 * @param {descuento} accion 
 */


function descuento(collection, accion){
    for (item of collection){
        accion(item)
    }
}

function precioCodigo(precio) {
    console.log("Precio con descuento: $" + (precio - 500));
    
}

descuento(precios, precioCodigo);
