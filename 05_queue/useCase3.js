/**
 * 【优先队列】
 * 一般情况下，从队列中删除元素，都是删除率先入队的元素。
 * 从优先队列中删除元素时，需要考虑优先权的限制。比如医院急诊科的候诊室，就是一个采取优先队列的例子：
 * 当病人进入候诊室时，分诊护士会评估患者病情的严重程度，然后给一个优先级代码。
 * 高优先级的患者先于低优先级的患者就医，同样的优先级患者按照先来服务的顺序就医。
 */


const PriorityQueue = require('./priorityQueue');

/**
 * 定义存储对象
 * @param {number} code 表示患者的优先级或者病情严重程度
 */
class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

let pQueue = new PriorityQueue();
pQueue.enqueue(new Patient("Smith", 5));
pQueue.enqueue(new Patient("Jones", 4));
pQueue.enqueue(new Patient("Fehrenbach", 6));
pQueue.enqueue(new Patient("Brown", 1));
pQueue.enqueue(new Patient("Ingram", 1));
console.log('Initial queue is: \n', pQueue.toString());

let seen = pQueue.dequeue();
while (seen !== null) {
    console.log('Patients being treated: \n', '\t' + seen.name);
    console.log('Patients waiting to be seen: \n', pQueue.toString() || '\tNone');
    seen = pQueue.dequeue();
}

console.log('Queue is empty');
