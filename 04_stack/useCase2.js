const Stack = require("./stack");

function isPalindrome(word) {
    const s = new Stack();
    for (let i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    let rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }

    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

// test case
let words = ["hello", "racecar", "1001", "dad"];
words.forEach(word => {
    if (isPalindrome(word)) {
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} is not a palindrome`);
    }
})
