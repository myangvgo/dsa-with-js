const Dictionary = require('./dictionary');

// Word Count

function countWord(s) {
    if (s == null) {
        return '';
    }

    let wordArr = s.split(' ');
    let wordDict = new Dictionary();
    wordArr.forEach(word => {
        if (!!wordDict.find(word)) {
            wordDict.datastore[word] += 1;
        } else {
            wordDict.datastore[word] = 1;
        }
    });

    return wordDict.displaySorted();
}

// test case
const s = "the brown fox jumped over the blue fox";
console.log(countWord(s));