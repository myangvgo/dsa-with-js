const Dictionary = require('./dictionary');

let books = new Dictionary();
books.add("Mike", "123");
books.add("David", "345");
books.add("Cynthia", "456");
console.log(`Number of entries: ${books.count()}`);
console.log("David's extension:", books.find("David"));
console.log(books.displayAll());

console.log("Sort by content:");
console.log(books.displaySorted());

books.remove("David");
console.log(books.displayAll());

books.clear();
console.log(`Number of entries: ${books.count()}`);
