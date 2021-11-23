var Robot = /** @class */ (function () {
    //constructor
    function Robot(nombre) {
        if (nombre !== undefined)
            this.name = nombre;
        else
            this.name = "Robby";
    }
    //metodos
    Robot.prototype.saludar = function () {
        return "Hola soy ".concat(this.name);
    };
    return Robot;
}());
var robot = new Robot('Andy');
var robot2 = new Robot();
console.log(robot.saludar());
console.log(robot2.saludar());
