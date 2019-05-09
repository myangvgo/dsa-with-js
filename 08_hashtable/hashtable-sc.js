/**
 * HashTable Class implemented using Separate Chain
 */
class HashTableSC {
    constructor() {
        this.table = Array(137);
    }

    /**
     * build chains for each hashed key
     */
    buildChains = () => {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }

    useHash = data => {
        const H = 37;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    showDistro = () => {
        let n = 0;
        let dispArr = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i][0] != undefined) {
                // dispArr.push(`${i}: ${this.table[i]}`);
                let index = 0;
                while (this.table[i][index] != undefined) {
                    dispArr.push(`${i}: ${this.table[i][index]}`);
                    index++;
                }
            }
        }
        return dispArr.join(', ');
    }

    put = data => {
        let pos = this.useHash(data);
        let index = 0;
        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = data;
        } else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
        }
    }

    get = key => {
        let index = 0;
        let pos = this.useHash(key);
        if (this.table[pos][index] == key) {
            return this.table[pos][index];
        } else {
            while (this.table[pos][index] != undefined && this.table[pos][index] != key) {
                ++index;
            }
            return this.table[pos][index];
        }
    }
}

module.exports = HashTableSC;