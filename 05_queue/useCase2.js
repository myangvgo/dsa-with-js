/**
 * 基数排序
 * 对于0~99的数字，基数排序将数据集扫描两次。
 * 第一次按个位上的苏子进行排序，第二次按十位上的数字进行排序，每个数字根据对应位上的数值被分在不懂的盒子里
 */

const Queue = require('./queue');

/**
 * 将数字分配到对应队列的函数
 * @param {number} nums 
 * @param {Queue} queues 
 * @param {number} n : 10
 * @param {number} digit 
 */
function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; ++i) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i])
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while(!queues[digit].isEmpty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

// main
const queues = [];
for(let i = 0; i < 10; i++){
    queues[i] = new Queue();
}
const nums = [];
for(let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log("Before radix sort: ");
console.log(nums.toString());

distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);

console.log("After radix sort: ");
console.log(nums.toString());
