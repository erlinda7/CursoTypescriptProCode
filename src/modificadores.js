var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.animalName = name;
        this.numeroPatas(4);
    }
    Animal2.prototype.numeroPatas = function (patas) {
        this.patitas = patas;
        console.log("Tengo ".concat(this.patitas, " patitas!"));
    };
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.saludo = function () {
        console.log("Hola soy ".concat(this.animalName, " !"));
    };
    return Dog2;
}(Animal2));
console.log('-------------------------');
var Shado = new Animal2('Shado');
console.log(Shado.animalName);
