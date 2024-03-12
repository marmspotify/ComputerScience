class Ventas {
    constructor(tamanio, color, marca, precio, sistemaOperativo, accesorios, compania) {
        this.tamanio         = tamanio;
        this.color           = color;
        this.marca           = marca;
        this.precio          = precio;
        this.sistemaOperativo= sistemaOperativo;
        this.accesorios      = accesorios;
        this.compania        = compania;
    }

    timbrar() {
        console.log("El celular marca "+ this.marca+ " con sistema operativo "+ this.sistemaOperativo+ " está timbrando.");
    }

    vibrar() {
        console.log("El celular de color "+ this.color+ " y tamaño "+ this.tamanio+ " está vibrando.");
    }

    apagar() {
        console.log("El celular módelo "+ this.precio+ " de la compañia "+ this.compania+ " y accesosios: "+ this.accesorios+ " se va apagar.");
    }
}

let venta1= new Ventas("grande", "negro", "samsung", "$ 5000.00", "Android", "audifonos y cargador", "Telcel");
let venta2= new Ventas("mediano", "blanco", "LG", "$ 1000.00", "Android", "cargador", "Movistar");
let venta3= new Ventas("chico", "azul", "IPhone", "$ 8000.00", "IOS", "audifonos", "Telcel");

venta1.vibrar();
venta2.timbrar();
venta3.apagar();