/**
 * 【队列的定义】
 * 队列是一种列表，只能在队尾插入元素，队首删除元素
 * 队列用于存储按顺序排列的数据，先进先出。
 * 
 * 【队列的操作】
 *  - 向队列中插入元素
 *  - 和删除队列中的元素
 *  - 读取队头的元素
 *  - 队列中存储了多少元素
 *  - 清空队列中的元素
 */

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.isEmpty = isEmpty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.length > 0 ? this.dataStore.shift() : null;
}

function front() {
    return this.dataStore.length > 0 ? this.dataStore[0] : null;
}

function back() {
    return this.dataStore.length > 0 ? this.dataStore[this.dataStore.length - 1] : null;
}

function toString() {
    return this.dataStore.join(' ');
}

function isEmpty() {
    return this.dataStore.length === 0;
}

module.exports = Queue;