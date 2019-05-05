const Queue = require("./queue");

const q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jean');

console.log(q.toString());
console.log('Front of queue: ', q.front());
console.log('Back of queue: ', q.back());
