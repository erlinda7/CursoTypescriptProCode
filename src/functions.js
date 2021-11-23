function suma(x, y) {
    return x + y;
}
function suma2(x, y) {
    console.log(x + y);
}
console.log(suma(10, 20));
function saludo(nombre, apellido) {
    if (apellido) {
        return "Hola ".concat(nombre, " ").concat(apellido);
    }
    return "Hola ".concat(nombre);
}
console.log(saludo('Erlinda', 'Chambi'));
console.log(saludo('Erlinda'));
//funcion anonima
var miFuncion = function (x, y) {
    return x + y;
};
console.log(miFuncion(5, 8));
