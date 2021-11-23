function diHola(informacion) {
    return "Hola ".concat(informacion.nombre, " ").concat(informacion.apellido, " tu edad es ").concat(informacion.edad);
}
var robot = {
    nombre: "Adan",
    apellido: "palacios",
    edad: 23
};
console.log(diHola(robot));
