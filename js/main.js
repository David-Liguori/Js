let edad; 
let nombre; 
let apellido = "Liguori";

const personasEnEsteTrabajo = 1;
let animales = ["perro", "gato", "elefante"];
animales.push("cabra");
animales.unshift("leon");

function iniciarSimulador() {
    console.log("Por favor, ingresa tu nombre y edad en las variables correspondientes antes de ejecutar el simulador.");
    console.log("Ejemplo: nombre = 'TuNombre'; edad = TuEdad;");

  
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
    } else {
        console.log("Eres mayor de edad.");
    }
}

iniciarSimulador();





