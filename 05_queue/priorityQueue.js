const Queue = require('./queue');

/**
 * 优先队列
 * 从队列中删除元素时，需要考虑优先权的限制。
 */
class PriorityQueue extends Queue {
    constructor() {
        super();
        this.dequeue = dequeue;
        this.toString = toString;
    }
}

/**
 * delete the item with higher priority
 * @return {T} the element got deleted or null if no element is found at the queue
 */
function dequeue() {
    if (this.dataStore.length > 0) {
        let priority = this.dataStore[0].code;
        let foundAt = 0;
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < priority) {
                priority = this.dataStore[i].code;
                foundAt = i;
            }
        }
        const deletedArr = this.dataStore.splice(foundAt, 1);
        return deletedArr.length === 0 ? null : deletedArr[0];
    }
    return null;
}

/**
 * Display elements in the queue
 * It is tied to the specific element stored in the queue
 */
function toString() {
    return this.dataStore
        .map(x => '\t' + x.name + ' code: ' + x.code + '\n')
        .reduce((acc, cur) => acc + cur, '');
}

module.exports = PriorityQueue;