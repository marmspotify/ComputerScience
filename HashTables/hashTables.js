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

    keys() {
        let allKeys = [];
        // debugger
        for(let i = 0; i < this.data.length; i++)
            if(this.data[i])
                for(let j = 0; j < this.data[i].length; j++)
                    allKeys.push(this.data[i][j][0]);
        return allKeys;
    }

    printTable() {
        debugger
        for(let i = 0; i < this.data.length; i++)
            if(this.data[i])
                console.log(`${i}: ${this.data}`);
            else
                console.log(`${i}: undefined`);
    }
}

const ht = new HashTable(7);

ht.set('harina', 100);
ht.set('huevo', 75);
ht.set('queso', 36);

console.log(ht.keys());

console.log(ht.printTable());

