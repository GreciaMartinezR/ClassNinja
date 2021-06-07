class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = () => {
        console.log(`El nombre del ninja es ${this.nombre}`);
    }

    showStats = () => {
        console.log(`El nombre del ninja es ${this.nombre}, su fuerza es ${this.fuerza}, la velocidad es ${this.velocidad} y su estado de salud es ${this.salud}`);
    }
    drinkSake = () => {
        this.salud= this.salud+10
        console.log(`Ahora la salud del ninja es ${this.salud}`);
    }
}
const ninjaUno = new Ninja("Hyabusa", "Perfecto");
ninjaUno.sayName();
ninjaUno.showStats();
ninjaUno.drinkSake();
