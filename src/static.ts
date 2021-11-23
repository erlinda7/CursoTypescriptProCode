class conversion{
    static PI:number =3.1416;

    static radianes(grados:number){
        return "Los radianes son: " + grados * conversion.PI/180;
    }
}

//no estamos creando una instanci de esta clase , solo estamos accediendo a sus metodos o propiedades
console.log(conversion.radianes(25));
