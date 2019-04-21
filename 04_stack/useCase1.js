/**
 * 数制之间的相互转换：将一个数字从一种数制转换成另一种数制
 * 
 * （1）最高位为n%b，将此位压入栈
 * （2）使用n/b代替n
 * （3）重复步骤1和2，直到n等于0，且没有余数
 * （4）持续将栈内元素弹出，直到栈为空，依次将这些元素排列，得到转换后数字的字符串形式
 * 
 * 注：此算法只针对基数为2-9的情况
 */

const Stack = require("./stack");

/**
 * transform a number to its base form
 * @param {int} num 
 * @param {int} base 
 */
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

// test case

let [num, base] = [32, 2];
let newNum = mulBase(num, base);
console.log(`${num} converted to base ${base} is ${newNum}`);

[num, base] = [125, 8];
newNum = mulBase(num, base);
console.log(`${num} converted to base ${base} is ${newNum}`);
