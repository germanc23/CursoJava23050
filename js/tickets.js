alert ("Usted esta ingresando a un sitio de compra. Para acceder debe ser mayor de edad.");

var edad = parseInt(prompt("Por favor, ingrese su edad"));

if (edad < 18) {
alert ("usted debe salir del sitio");
} else {
alert ("puede ingresar al sitio");
}