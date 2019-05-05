// Design a LinkedList (SinglyLinkedList)

/**
 * Node Class
 * @property {T} element : store the data of Node
 * @property {ref} next : store the link pointed to next node
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// Linked List (Singly Linked List Class)
class LinkedList {
    constructor() {
        // depend on the specified type to handle
        // for simplicity here we use string for demostration.
        // since JavaScript does not support generics, 
        // one alternative is to use TypeScript to support all datat types.
        this.head = new Node("head");
        this.find = this.find.bind(this);
        this.findPrevious = this.findPrevious.bind(this);
        this.insert = this.insert.bind(this);
        this.insertAfter = this.insertAfter.bind(this);
        this.remove = this.remove.bind(this);
        this.toString = this.toString.bind(this);
    }

    /**
     * Traverse linked list
     * Find the node whose element property is equal to the specified value
     * @param {T} item : the value or data to be searched
     * @return {Node} node : The found node or null if not found
     */
    find(item) {
        let currNode = this.head;
        while (currNode !== null && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * Find previous node of the current node whose element is equal to item
     * @param {T} item : the value or data to be searched 
     * @return {Node} node : The found node or null if not found
     */
    findPrevious(item) {
        let currNode = this.head;
        while (currNode !== null &&
            currNode.next !== null &&
            currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * Insert a new element after a specified element.
     * @param {T} newElement ： property of the new node to be inserted
     * @param {*} item : property of the node to be inserted after.
     * @return {Node} the newly inserted node or null if insert is not successful
     */
    insertAfter(newElement, item) {
        let foundNode = this.find(item);
        if (foundNode === null)
            return null;

        let newNode = new Node(newElement);
        newNode.next = foundNode.next;
        foundNode.next = newNode;

        return newNode;
    }

    /**
     * Insert an element to the tail of the linked list
     * @param {T} newElement ： property of the new node to be inserted
     * @return {Node} the newly inserted node
     */
    insert(newElement) {
        let newNode = new Node(newElement);
        let currNode = this.head;
        // traverse to the tail node
        while (currNode !== null && currNode.next !== null) {
            currNode = currNode.next;
        }
        // insert node
        currNode.next = newNode;
        newNode.next = null;
        return newNode;
    }

    /**
     * remove the node whose element is equal to item from the list
     * @param {T} item property of the node to be removed
     * @return {void}
     */
    remove(item) {
        let prev = this.findPrevious(item);
        if (prev !== null && prev.next !== null) {
            // let previous node's next point to current node's node
            // which literally remove the current node
            prev.next = prev.next.next;
        }
    }

    /**
     * display all elements of a list, execpet the Head node.
     * depending on the type of element, the display method will be different.
     * this method works for data type of element is string.
     */
    toString() {
        let currNode = this.head;
        let display = [];
        while (currNode !== null && currNode.next !== null) {
            display.push(currNode.next.element);
            currNode = currNode.next;
        }
        return display.length ? display.join(' ') : '';
    }
}

module.exports = LinkedList;