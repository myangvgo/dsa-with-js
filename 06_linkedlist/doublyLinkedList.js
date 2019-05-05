class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(element) {
        this.head = new Node('head');
        this.find = this.find.bind(this);
        this.findLast = this.findLast.bind(this);
        this.insert = this.insert.bind(this);
        this.insertAfter = this.insertAfter.bind(this);
        this.remove = this.remove.bind(this);
        this.toString = this.toString.bind(this);
        this.displayReverse = this.displayReverse.bind(this);
    }

    /**
     * Traverse linked list
     * Find the node whose element property is equal to the specified value
     * @param {T} item : the value or data to be searched
     * @return {Node} node : The found node or null if not found
     */
    find(item) {
        let currNode = this.head;
        while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * Get the tail node of list
     * @return {Node} tailNode : Tail node of the list
     */
    findLast() {
        let currNode = this.head;
        while (currNode !== null && currNode.next !== null) {
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

        // set new node 
        newNode.next = foundNode.next;
        newNode.prev = foundNode;

        // update current node
        foundNode.next = newNode;

        return newNode;
    }

    /**
     * Insert an element to the tail of the linked list
     * @param {T} newElement ： property of the new node to be inserted
     * @return {Node} the newly inserted node
     */
    insert(newElement) {
        let oldTailNode = this.findLast();
        let newNode = new Node(newElement);

        // set newNode
        newNode.prev = oldTailNode;
        oldTailNode.next = newNode;

        return newNode;
    }

    /**
     * remove the node whose element is equal to item from the list
     * @param {T} item property of the node to be removed
     * @return {void}
     */
    remove(item) {
        let currNode = this.find(item);
        if (currNode !== null && currNode.next !== null) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
        }
    }

    /**
     * display all elements of a list, execpet the Head node.
     * depending on the type of element, the display method will be different.
     * this method works for data type of element is string.
     * @return {string} string display of list
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

    /**
     * display all elements reversely
     * @return {string} string display of list
     */
    displayReverse() {
        let currNode = this.findLast();
        let dispArr = [];
        while (currNode !== null && currNode.prev !== null) {
            dispArr.push(currNode.element);
            currNode = currNode.prev; // traverse forward
        }
        return dispArr.length ? dispArr.join(' ') : '';
    }
}

module.exports = DoublyLinkedList;