// Vamos a armar un menú de opciones que, POR AHORA solo nos va a avisar la opción elegida. Qué quiere decir? Que algún día lo vamos a usar un poquitito más desarrollado.
// Tarea para la casa: lo que hice con switch lo van a hacer con if else. Lo que hice con do while traten de hacerlo con while.
/*

1. Compre
2. Venda
3. Verifique stock

0. SALIR

*/

let opcion = parseInt(prompt("Bienvenido al menú de opciones.\n\n1. Para comprar\n2. Para vender\n3. Para verificar stock\n\nSi desea salir, ingrese 0"));

while (opcion !==0){
    if (opcion===1){
        alert("Vas a comprar");
    } else if (opcion===2){
        alert("Vas a vender");
    } else if (opcion===3){
        alert("Vas a ver stock");
    } else {
        alert("La opción ingresada no es válida");
    }
    opcion = parseInt(prompt("Bienvenido al menú de opciones.\n\n1. Para comprar\n2. Para vender\n3. Para verificar stock\n\nSi desea salir, ingrese 0"));
}
if (opcion===0){
    alert("Gracias vuelvas prontos!");
}
