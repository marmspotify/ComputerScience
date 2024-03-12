
class Personaje {

    constructor(nombre, enemigo, energia, minutosRecuperacion, distanciaMaxima) {
        this.nombre       = nombre;
        this.enemigo      = enemigo;        
        this.energia      = energia;
        this.minutosRecuperacion= minutosRecuperacion;
        this.distanciaMaxima    = distanciaMaxima;
    }

    correr(metros) {
        this.energia= 100-(metros/this.distanciaMaxima*100);
        if(this.energia<= 0) {
            this.energia= 0;
            console.log("El personaje no tiene energía y debe descansar "+ this.minutosRecuperacion+ " min.");
        }
        console.log("Energía restante del personaje "+ this.energia+ "%.");
    }

    descansar(minutos) {
        this.energia= (minutos/this.minutosRecuperacion*100) + this.energia;
        if(this.energia> 100) 
            this.energia= 100;                    
        console.log("El personaje tiene el "+ this.energia+ "% de energía para correr.");
    }
}

class Enemigo {

    constructor(nombre, energia) {
        this.nombre = nombre;
        this.energia= energia;
    }

    atacar(personaje, energia) {
        personaje.energia= personaje.energia- energia;
        if(personaje.energia<= 0)
            console.log("El personaje "+ personaje.nombre+ " está muerto.");
        else
            console.log("El personaje "+ personaje.nombre+ " quedó con "+ personaje.energia+ " para atacar.");
    }
}