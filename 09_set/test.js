const Set = require('./set');

// add and remove
let namesSet = new Set();
namesSet.add('David')
namesSet.add('Jennifer')
namesSet.add('Cynthia')
namesSet.add('Mike')
namesSet.add('Raymond')

if (namesSet.add('Mike')) {
    console.log('Mike is added');
} else {
    console.log('Can\'t add Mike, must already exist')
}
console.log(namesSet.show());

if (namesSet.remove('Mike')) {
    console.log('Mike is removed');
} else {
    console.log('Can\'t remove Mike, not found')
}
console.log(namesSet.show());

if (namesSet.add('Clayton')) {
    console.log('Clayton is added');
} else {
    console.log('Can\'t add Clayton, must already exist')
}
console.log(namesSet.show());

// ---------union, intersect, subset, difference---------
let setA = new Set();
setA.add('Mike')
setA.add('Clayton')
setA.add('Jennifer')
setA.add('Raymond')
console.log('setA:', setA.show())

let setB = new Set();
setB.add('Raymond');
setB.add('Cynthia');
setB.add('Jonathan');
console.log('setB:', setB.show())

let unionSet = setA.union(setB);
console.log('setA union setB:', unionSet.show());

let intersectSet = setA.intersect(setB);
console.log('setA intersect setB:', intersectSet.show());

let isBsubsetOfA = setB.isSubsetOf(setA);
console.log('setB is subset of setA:', isBsubsetOfA);

setB.remove('Cynthia');
setB.remove('Jonathan');
isBsubsetOfA = setB.isSubsetOf(setA);
console.log('After removal of \'Cynthia\' and \'Jonathan\' in setB, setB is subset of setA:', isBsubsetOfA);

setB.add('Cynthia');
setB.add('Jonathan');
let setADiffSetB = setA.difference(setB);
console.log('After added back \'Cynthia\' and \'Jonathan\' in setB');
console.log('setA:', setA.show(), 'difference', 'setB:', setB.show(), '->', setADiffSetB.show());
