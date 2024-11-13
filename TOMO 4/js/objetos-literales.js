// Objeto literal
// Ejemplo Básico

const persona = {
nombre: "Juan",
edad: 30,
ciudad: "Buenos Aires"
};

// Diferencias con Arrays
// Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
rojo: "Detenerse",
verde: "Avanzar",
azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

//Arrays de objetos

let arrayObjetos = [];  

arrayObjetos.push({  
    id: 1, nombre: "producto 1"  
});  
arrayObjetos.push({  
    id: 2, nombre: "producto 2"  
});  
arrayObjetos.push({  
    id: 3, nombre: "producto 3"  
});  
console.log(arrayObjetos);  


for (let objeto of arrayObjetos) {  
    console.log(objeto.nombre);  
}  


//Agregar Objetos con push
const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 25 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios); // Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//Ordenar Objetos con sort
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios); // Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//Filtrar con filter
const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
console.log(mayoresDe25); // Resultado: [{ nombre: "Luis", edad: 30 }]

//Buscar un Objeto con find
const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis); // Resultado: { nombre: "Luis", edad: 30 }