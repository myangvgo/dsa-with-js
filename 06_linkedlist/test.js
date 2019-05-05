const LinkedList = require('./linkedList');
const DoublyLinkedList = require('./doublyLinkedList');
const CircularLinkedList = require('./circularLinkedList');

// --------------------Singly Linked List Test-------------------
let cities = new LinkedList();
cities.insertAfter("Conway", "head");
cities.insertAfter("RusselVille", "Conway");
cities.insert("Alma");
cities.insert("Adam");
console.log('Display of Singly Linked List:', cities.toString());
cities.remove("Adam");
console.log('After remove Adam, Display of Singly Linked List:', cities.toString());


// --------------------Doubly Linked List Test-------------------
let countries = new DoublyLinkedList();
countries.insert("Singapore");
countries.insert("China");
countries.insert("U.S.A");
countries.insert("Spain");
countries.insert("Pueto Rico");
console.log('Display of Doubly Linked List:', countries.toString());
console.log('Reverse display of Doubly Linked List Nodes', countries.displayReverse());
countries.remove("China");
console.log('After remove China, display of Doubly Linked List', countries.toString());
console.log('Reverse display of Doubly Linked List Nodes', countries.displayReverse());

// --------------------Circular Linked List Test-------------------
let colors = new CircularLinkedList();
colors.insertAfter("red", "head");
colors.insertAfter("green", "red");
colors.insertAfter("yellow", "green");
colors.insertAfter("blue", "yellow");
colors.insert('black');
console.log('Display of Circular Linked List:', colors.toString())
colors.remove('yellow');
console.log('After remove yellow, display of Circular Linked List', colors.toString());
