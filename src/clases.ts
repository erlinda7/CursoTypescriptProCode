class Robot {
    //atributos de nuestro robot
    name: string;
    apellido: string;

    //constructor
    constructor(nombre?:string){
        if(nombre !==undefined)
            this.name = nombre;
        else
            this.name ="Robby"
    }


    //metodos
    saludar():string {
        return `Hola soy ${this.name}`
    }
}


let robot = new Robot('Andy');
let robot2 = new Robot();

console.log(robot.saludar());
console.log(robot2.saludar());
