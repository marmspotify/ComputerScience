class HashTable {

    constructor(size = 7) {
        this.data = new Array(size); // -> arreglo vacío con 7 posiciones [,,,,,,]
        console.log(this.data);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) 
            hash = (hash + key.charCodeAt(i) * 23) % this.data.length;
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
        return this.data;
    }

    get(key) {
        let index      = this._hash(key);
        let positionSelected= this.data[index];
        if(positionSelected)
            for(let i = 0; i < positionSelected.length; i++)
                if(positionSelected[i][0] === key)
                    return positionSelected[i][1];
        return undefined;
    }
}

const ht = new HashTable(13);

ht.set('harina', 100);
ht.set('huevo', 75);
ht.set('queso', 36);

