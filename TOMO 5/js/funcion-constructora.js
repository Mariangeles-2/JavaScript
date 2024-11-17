//Ejemplo de Uso Pre-ES6

function Persona(nombre, edad, calle) {
this.nombre = nombre;
this.edad = edad;
this.calle = calle;
this.describir = function() {
return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
};
}

// Crear un nuevo objeto Persona
var persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());

//Ejemplo de Uso ES6

class Persona {
constructor(nombre, edad, calle) {
this.nombre = nombre;
this.edad = edad;
this.calle = calle;
}

describir() {
return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
}
}

// Crear un nuevo objeto Persona
const persona2 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());