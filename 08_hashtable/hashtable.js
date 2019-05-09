/**
 * HashTable 类
 */

class HashTable {
    constructor() {
        this.table = Array(137);
    }

    /**
     * Hash Function
     * @param {*} data 
     */
    simpleHash = data => {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    /**
     * improved hash function
     */
    betterHash = data => {
        const H = 41; // select a prime number; 37 will produce collision
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += H * total + data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    /**
     * store data
     */
    put = data => {
        // const pos = this.simpleHash(data); // collision happens
        // also collision for certain H, need to choose appropriate H
        const pos = this.betterHash(data); 
        this.table[pos] = data;
    }

    /**
     * retrieve data
     */
    get = key => {
        return this.table[this.betterHash(key)];
    }

    /**
     * display data
     */
    showDistro = () => {
        let disArr = [];
        for (let i = 0; i < this.table.length; ++i) {
            // filter undefined value
            if (this.table[i] != undefined) {
                disArr.push(`${i}: ${this.table[i]}`);
            }
        }
        return disArr.join(', ');
    }
}

module.exports = HashTable;