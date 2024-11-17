//localStorage:
        
// Guardar datos
localStorage.setItem('usuario', 'JuanPerez');
// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'
// Eliminar datos
localStorage.removeItem('usuario');
        
//sessionStorage:
        
// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'
// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');

//Almacenamiento de Datos en localStorage con setItem
//Almacenar una cadena de texto: Guarda un saludo en el almacenamiento local: 
localStorage.setItem('saludo', 'Hola, mundo!');

//Almacenar un número
localStorage.setItem('puntuacion', '10'); 

//Para recuperar el número y convertirlo a su tipo original: 
let puntuacion = parseInt(localStorage.getItem('puntuacion'));
console.log(puntuacion); // 10

//Almacenar datos complejos
let usuario2 = { nombre: 'Ana', edad: 25 }; localStorage.setItem('usuario', JSON.stringify(usuario));
//Para recuperarlo, usa JSON.parse: 
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioRecuperado.nombre); // Ana