let edad = 22;
let nombre = "David";
let apellido = "Liguori";

const personasEnEsteTrabajo = 1;

let animales = ["perro", "gato", "elefante"];

animales.push("cabra");
animales.unshift("leon");

console.log("Lista de animales:");
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}


function preguntarNombre() {
    let nombreDelUsuario = "Usuario"; 
    console.log("¿Cuál es tu nombre?");
    
    console.log("¡Hola " + nombreDelUsuario + "!");
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
    } else {
        console.log("Eres mayor de edad.");
    }
}

window.onload=function() {
    preguntarNombre();
    procesarAnimales();
    mensajePorEdad();
};






