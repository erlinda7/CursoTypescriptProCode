interface IRobot{
    nombre:string;
    apellido:string;
    edad?:number;
}

function diHola(informacion:IRobot){
    return `Hola ${informacion.nombre} ${informacion.apellido} tu edad es ${informacion.edad}`
}

let robot = {
    nombre: "Adan",
    apellido: "palacios",
    edad:23
}

console.log(diHola(robot));
