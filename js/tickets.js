alert ("Usted esta ingresando a un sitio de compra. Para acceder debe ser mayor de edad.");

var edad = parseInt(prompt("Por favor, ingrese su edad"));

if (edad < 18) {
alert ("usted debe salir del sitio");
} else {
alert ("puede ingresar al sitio");
}

let precio = parseInt(document.getElementById("precio").innerText);
let btnBorrar = document.getElementById("borrar");
let btnResumen = document.getElementById("resumen");

function resumen(precio, cantidad, categoria) {
  let total = precio * cantidad;
  let descuento = (total * categoria) / 100;
  return total - descuento;
}

btnResumen.addEventListener("click", () => {
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let categoria = parseInt(document.getElementById("categoria").value);
  document.getElementById("precioPagar").innerText = resumen(
    precio,
    cantidad,
    categoria
  );
});

btnBorrar.addEventListener("click", () => {
  document.getElementById("cantidad").value = 0;
  document.getElementById("precioPagar").innerText = 0;
});