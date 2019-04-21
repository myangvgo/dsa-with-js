/**
 * [栈的定义]
 * 栈是一种特殊的数据结构，栈内的元素只能通过列表的一端访问，这一端称为栈顶。
 * 栈被称为一种后入先出(LIFO)的数据结构：任何不在栈顶的元素都无法访问，为了得到栈底的元素，必须先拿掉上面的元素
 *
 * 对栈的主要操作：
 *  1.将一个元素压入栈 - push()
 *  2.将一个元素弹出栈 - pop()
 *
 * 另一个常用的操作：
 *  预览栈顶的元素 - peek()
 *
 * 使用变量top
 *  用来记录栈顶元素的位置，以及标记哪里可以插入新元素
 *
 * 清除栈内所有元素：
 *  clear()
 *
 * 记录栈内元素的个数
 *  length
 */
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
    }
}

/**
 * 元素压栈
 * @param {*} element 
 * @return {void}
 */
function push(element) {
    this.dataStore[this.top++] = element;
}

/**
 * 元素出栈 - 返回栈顶元素，同时top位置减一
 * @return {*} element
 */
function pop() {
    // stack is empty
    if (this.top === 0) {
        return null;
    } else {
        return this.dataStore[--this.top];
    }
}

/**
 * 获取栈顶元素
 */
function peek() {
    if (this.top === 0) {
        return null;
    }
    return this.dataStore[this.top - 1];
}

/**
 * 获取栈内元素个数
 */
function length() {
    return this.top;
}

/**
 * 清空一个栈
 */
function clear() {
    this.top = 0;
}

module.exports = Stack;