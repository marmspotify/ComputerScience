// 1.- Crear una función que encuentre el número más repetido en un array.
// Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6

const arreglo = [3,6,1,8,2,3,6,3,2,5,6];

function maximoNumero(arreglo) {
    let maximaFrecuencia = 0;
    let maximoValor = arreglo[0];
    let coleccion = {}
    arreglo.forEach(v => {coleccion[v] = (coleccion || 0) + 1})
    for(num in coleccion) {
        if(coleccion[num] > maximaFrecuencia) {
            maximaFrecuencia = coleccion[num];
            maximoValor = num;
        }
    }
    return maximoValor
}

console.log(maximoNumero(arreglo))

// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
// Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’]

const letras = [8,'e',7,2,'a','d','f',2,3,1,4,3];

function encontrarLetras(letras) {
    let almacen = [];
    letras.forEach(v => {
        if(typeof v === 'string') almacen.push(v)
    })
    return almacen
    return letras.filter(v => typeof v === 'string')
}

console.log(encontrarLetras(letras));

// 3.- Crear una función que busque el número más grande en un arreglo.
// Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12

const numeros = [1,4,7,2,4,1,9,4,0,2,4,5,12];

function maxNumber(numeros) {
    const r = numeros.sort(function(current, next) { current - next});
    return r.at(-1)
}

console.log(maxNumber(numeros));

// 4.- Crear una función que busque el número más pequeño en el arreglo.
// Ejemplo input - > [1,4,5,-1,-7,2,3,9]
// Salida -> -7

const numerosOtros = [1,4,5,-1,-7,2,3,9];

function minNumber(numeros) {
    const r = numeros.sort(function( a, b ) { return a < b ? -1 : 1; });
    return r.at(0)
}

console.log(minNumber(numerosOtros));

// 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
// Nombre
// Apellidos
// Teléfono
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
// Agregar un contacto.
// Buscar un contacto por nombre.

class Contacto {
    constructor(nombre, apellido, telefono) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

class ListaContactos {         

    #contactos = [];

    agregar(contacto) {        
       this.#contactos.push(contacto);
        console.log(`Se agregó con éxito el contacto ${contacto.nombre}`);        
    }

    buscar(nombre) {        
        return this.#contactos.filter(v => v.nombre === nombre)        
    }
}

const contacto = new Contacto("Miguel","Ramírez","4491294354");

const listaContactos = new ListaContactos();

listaContactos.agregar(contacto);
listaContactos.buscar("Miguel");