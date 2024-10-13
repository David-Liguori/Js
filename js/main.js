const personasEnEsteTrabajo = 1;

let animales = ["perro", "gato", "elefante"];
animales.push("cabra");
animales.unshift("leon");

let usuarios = [];
let contrasenas = [];
let nombreCorrecto = "David"; 
let contrasenaCorrecta = "12345"; 

for (let i = 0; i < 3; i++) {
    nombre = prompt("Ingresa tu nombre:");
    let contrasena = prompt("Ingresa tu contraseña:");

    if (nombre === nombreCorrecto && contrasena === contrasenaCorrecta) {
        alert("Acceso concedido. Bienvenido, " + nombre + "!");
        iniciarSimulador(); 
        break; 
    } else {
        alert("Acceso denegado. Intenta nuevamente.");
        console.log("Acceso denegado. Intenta nuevamente.");
        usuarios.push(nombre); 
        contrasenas.push(contrasena); 
    }

    if (i === 2) {
        alert("Has agotado tus intentos. Los nombres ingresados fueron: " + usuarios.join(", "));
        console.log("Has agotado tus intentos. Los nombres ingresados fueron: " + usuarios.join(", "));
        console.log("Las contraseñas ingresadas fueron: " + contrasenas.join(", "));
    }
}

function iniciarSimulador() {
   
    edad = prompt("Por favor, ingresa tu edad:"); 
    console.log("Nombre actual: " + nombre);
    console.log("Edad actual: " + edad);

    mensajePorEdad();
    procesarAnimales();
}

function procesarAnimales() {
    console.log("Número total de animales: " + animales.length);
    console.log("Animales disponibles:");
    for (let i = 0; i < animales.length; i++) {
        console.log("Animal " + (i + 1) + ": " + animales[i]);
    }
}

function mensajePorEdad() {
    if (edad < 18) {
        console.log("Eres menor de edad.");
        alert("Eres menor de edad.");
    } else {
        console.log("Eres mayor de edad.");
        alert("Eres mayor de edad.");
    }
}
