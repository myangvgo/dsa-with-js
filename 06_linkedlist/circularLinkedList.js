class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(element) {
        this.head = new Node('head');
        this.head.next = this.head; // set the head.next point to itself
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
        while (currNode !== null &&
            currNode.element !== item &&
            currNode.next !== null &&
            currNode.next.element !== 'head') {
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
            currNode.next.element !== item &&
            currNode.next.element !== 'head') {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * Insert an element to the tail of the linked list
     * @param {T} newElement ： property of the new node to be inserted
     * @return {Node} the newly inserted node
     */
    insert(newElement) {
        let currNode = this.head;
        while (currNode !== null &&
            currNode.element !== newElement &&
            currNode.next !== null &&
            currNode.next.element !== 'head') {
            currNode = currNode.next;
        }
        // insert node
        let newNode = new Node(newElement);
        newNode.next = this.head;
        currNode.next = newNode;
        return newNode;
    }

    /**
     * Insert a new element after a specified element.
     * @param {T} newElement ： property of the new node to be inserted
     * @param {*} item : property of the node to be inserted after.
     * @return {Node} the newly inserted node or null if insert is not successful
     */
    insertAfter(newElement, item) {
        let currNode = this.find(item);
        if (currNode === null)
            return null;

        let newNode = new Node(newElement);
        newNode.next = currNode.next;
        currNode.next = newNode;

        return newNode;
    }

    /**
     * remove the node whose element is equal to item from the list
     * @param {T} item property of the node to be removed
     * @return {void}
     */
    remove(item) {
        let prevNode = this.findPrevious(item);
        if (prevNode !== null &&
            prevNode.next !== null &&
            prevNode.next.element !== 'head') {
            prevNode.next = prevNode.next.next;
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
        while (this.head !== null &&
            currNode.next !== null &&
            currNode.next.element !== 'head') {
            display.push(currNode.next.element);
            currNode = currNode.next;
        }
        return display.length ? display.join(' ') : '';
    }
}

module.exports = CircularLinkedList;