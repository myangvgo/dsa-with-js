/**
 * [Dictionary 字典]
 * 字典是一种以 键 - 值 对形式存储数据的数据结构。
 * JavaScript的Object类就是以字典的形式设计的。
 */

class Dictionary {
    constructor() {
        this.datastore = new Array();
        this.add = this.add.bind(this);
        this.find = this.find.bind(this);
        this.remove = this.remove.bind(this);
        this.displayAll = this.displayAll.bind(this);
        this.count = this.count.bind(this);
        this.clear = this.clear.bind(this);
    }

    add(key, val) {
        this.datastore[key] = val;
    }

    find(key) {
        return this.datastore[key];
    }

    remove(key) {
        delete this.datastore[key];
    }

    displayAll() {
        let arr = [];
        let keys = Object.keys(this.datastore);
        for (let key of keys) {
            arr.push(`'${key}' -> '${this.datastore[key]}'`);
        }
        return arr.join(' ');
    }

    displaySorted() {
        let arr = [];
        let keys = Object.keys(this.datastore).sort();
        for (let key of keys) {
            arr.push(`'${key}' -> '${this.datastore[key]}'`);
        }
        return arr.join(' ');
    }

    count() {
        let counter = 0;
        for (let key of Object.keys(this.datastore)) {
            counter++;
        }
        return counter;
    }

    clear() {
        for (let key of Object.keys(this.datastore)) {
            delete this.datastore[key];
        }
    }

}

module.exports = Dictionary;
