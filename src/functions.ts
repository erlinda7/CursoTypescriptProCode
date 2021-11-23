function suma(x:number, y:number):number {
    return x+y;
}

function suma2(x:number, y:number):void {
    console.log(x+y);
    
}

console.log(suma(10,20));


function saludo(nombre:string, apellido?:string):string {
    if(apellido) {
        return `Hola ${nombre} ${apellido}`
    }
    return `Hola ${nombre}`
}

console.log(saludo('Erlinda', 'Chambi'));
console.log(saludo('Erlinda'));

//funcion anonima
let miFuncion = function(x:number, y:number):number {
    return x+y;
}

console.log(miFuncion(5,8));

