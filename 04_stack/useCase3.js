const Stack = require("./stack");

// factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Use Stack to implement recursion
function fact(n) {
    let s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    let product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(`factorial(5): ${factorial(5)}, fact(5): ${fact(5)}`);