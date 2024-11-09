//Ejemplo 1

function calcularDistancia(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

let distancia = calcularDistancia(0, 0, 10, 10);
console.log(distancia); // Muestra la distancia entre los puntos

