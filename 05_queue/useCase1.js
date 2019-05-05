const Queue = require('./queue');
const fs = require('fs');
const path = require('path');

/**
 * 方块舞舞伴分配问题：
 * 当男男女女来到舞池，按照性别排成两队。
 * 当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴，他们身后的人各自向前移动一位，变成新的队首。
 * 当一对舞伴迈入舞池时，主持人会大声喊出他们的名字。
 * 当一对舞伴走出舞池时，且两排队伍中有任意一队没人时，主持人把这个情况告诉大家
 */


/**
 * Dancer class
 * @param {string} name 
 * @param {string} sex 
 */
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

/**
 * Populate Dancers from list
 */
function populateDancers() {
    let dancers = [];
    const data = fs.readFileSync(path.join(__dirname, 'dancers.txt'));
    const dancerArray = data.toString().split('\n');
    dancerArray.forEach(x => {
        let dancer = x.split(',');
        if (dancers && Array.isArray(dancers)) {
            dancers.push(new Dancer(dancer[1].trim(' '), dancer[0].trim(' ')));
        }
    });
    return dancers;
}

/**
 * Dance
 * @param {Queue} maleDancers 
 * @param {Queue} femaleDancers 
 */
function dance(maleDancers, femaleDancers) {
    console.log("Dance partners: ");
    while (!maleDancers.isEmpty() && !femaleDancers.isEmpty()) {
        let maleDancer = maleDancers.dequeue();
        let femaleDancer = femaleDancers.dequeue();
        console.log('Male dancer is', maleDancer.name);
        console.log('Female dancer is', femaleDancer.name);
    }

    if (maleDancers.isEmpty() || femaleDancers.isEmpty()) {
        console.log('No dancer partners are available, because:')
        if (maleDancers.isEmpty())
            console.log('Male dancers are empty');
        if (femaleDancers.isEmpty())
            console.log('Female dancers are empty');
    }
}


// test case
const allDancers = populateDancers();
const maleDancers = new Queue();
const femaleDancers = new Queue();
allDancers.forEach(x => {
    if (x.sex.toString() === 'M') {
        maleDancers.enqueue(x);
    } else {
        femaleDancers.enqueue(x);
    }
});

dance(maleDancers, femaleDancers);
