const HashTable = require('./hashtable');
const HashTableSC = require('./hashtable-sc');
const HashTableLP = require('./hashtable-lp');

const names = [
    "David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];

let hTable = new HashTable();
names.forEach(name => hTable.put(name));
console.log('Simple and Better Hash Function Tests: ')
console.log(hTable.showDistro());

// problem
// Raymond -> 730 & Clayton -> 730 has the same hash value if use SimpleHash function
// Collision: Raymond is overwritten by Clayton
// Need to improve HashFunction.

let hTableSc = new HashTableSC();
hTableSc.buildChains();
names.forEach(x => hTableSc.put(x));
console.log("Separate Chain as Hash Function Tests: ")
console.log(hTableSc.showDistro());

let hTableLP = new HashTableLP();
names.forEach(name => hTableLP.put(name));
console.log("Linear Probing as Hash Function Tests: ")
console.log(hTableLP.showDistro());