const Stack = require("./stack");

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: ", s.length());
console.log("top: ", s.peek());

var popped = s.pop();
console.log("The popped element is ", popped);
console.log("top: ", s.peek());

s.push("Cynthia");
console.log("top: ", s.peek());

s.clear();
console.log("length: ", s.length());
console.log("top: ", s.peek());

s.pop();
s.pop();
s.pop();
console.log("length: ", s.length());
console.log("top: ", s.peek());

s.push("Cynthia");
console.log("length: ", s.length());
console.log("top: ", s.peek());
