class Animal2{
    //por default es public
    public animalName:string;
    private patitas:number;

    constructor(name:string){
        this.animalName=name;
        this.numeroPatas(4);
    }

    private numeroPatas (patas: number){
        this.patitas =patas;
        console.log(`Tengo ${this.patitas} patitas!`);
        
    }
}

class Dog2 extends Animal2 {
    constructor(name:string){
        super(name);
    }

    saludo(){
        console.log(`Hola soy ${this.animalName} !`);
        
    }
}
console.log('-------------------------');

let Shado = new Animal2('Shado');

console.log(Shado.animalName);
