class Animal{
    animalName:string;
    patitas:number;

    constructor(name:string){
        this.animalName=name;
    }

    numeroPatas (patas: number){
        this.patitas =patas;
        console.log(`Tengo ${this.patitas} patitas!`);
        
    }
}

class Dog extends Animal {
    constructor(name:string){
        super(name);
    }

    saludo(){
        console.log(`Hola soy ${this.animalName} !`);
        
    }
}

let Tom = new Dog('Tom');

Tom.saludo();

Tom.numeroPatas(4);