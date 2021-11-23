var conversion = /** @class */ (function () {
    function conversion() {
    }
    conversion.radianes = function (grados) {
        return "Los radianes son: " + grados * conversion.PI / 180;
    };
    conversion.PI = 3.1416;
    return conversion;
}());
//no estamos creando una instanci de esta clase , solo estamos accediendo a sus metodos o propiedades
console.log(conversion.radianes(25));
