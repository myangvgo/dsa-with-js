/**
 * HashTable with Linear Probing as the collison evasion method
 */
class HashTableLP {
    constructor() {
        this.table = Array(137); // for storing val
        this.values = []; // for storing data
    }

    useHash = data => {
        const H = 37;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    put = data => {
        let pos = this.useHash(data);
        // check collision here, if it is occupied, move to the next empty slot
        if (this.table[pos] == undefined) {
            this.table[pos] = pos;
            this.values[pos] = data;
        } else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = pos;
            this.values[pos] = data;
        }
    }

    get = data => {
        let hash = -1;
        hash = this.useHash(data);
        if (hash > -1) {
            for (let i = hash; this.table[hash] != undefined; i++) {
                if (this.table[hash] == hash) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
    }

    /**
     * display data
     */
    showDistro = () => {
        let disArr = [];
        for (let i = 0; i < this.table.length; ++i) {
            // filter undefined value
            if (this.table[i] != undefined) {
                disArr.push(`${i}: ${this.values[this.table[i]]}`);
            }
        }
        return disArr.join(', ');
    }
}

module.exports = HashTableLP;