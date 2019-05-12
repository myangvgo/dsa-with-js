
/**
 * Node class
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1; // keep track of occurences
    }
}

/**
 * Binary Search Tree Class
 */
class BST {
    constructor() {
        // The class consists of just one data member:
        // a Node object that represents the root node of the BST
        this.root = null;
    }

    /**
     * Add new nodes to the tree
     * First Step: create a Node object - passing the data the node will store
     * Second Step: check the BST for a root node.
     *      - If a root node doesn't exist, the BST is new and this node is the root node
     *      - Otherwise, we need to traverse the BST to find the proper insertion point.
     *        The function uses a Node object that is assigned as the current node which moves from level to level
     *        The function also has to position itself inside the BST at the root node
     * 
     * Algorithm for determining the correct insertion point for a node:
     *      1. Set the root node to be the current node
     *      2. If the data value in the inserted node is less than the data value in the current node,
     *         set the current node to be the left child of the current node.
     *         If the data value in the inserted node is greater than the data value in the current node,
     *         skip to step 4.
     *      3. If the value of the left child of the current node is null, insert the new node here 
     *         and exit the loop. Otherwise, skip to the next iteration of the loop.
     *      4. Set the current node to be the right child of the current node
     *      5. If the value of the right child of the current node is null, insert the new node here
     *         and exit the loop. Otherwise, skip to the next iteration of the loop.
     */
    insert = data => {
        let node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            let curr = this.root;
            let parent;
            while (true) {
                parent = curr;
                if (data < curr.data) {
                    curr = curr.left;
                    if (curr == null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    curr = curr.right;
                    if (curr == null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    /**
     * BST Depth First Traversal
     * 1. An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.
     * @param {Node} node : the root node of a BST
     * @return {Node[]} a Node Array or null if the BST is null
     */
    inOrder = (node = this.root) => {
        if (node == null) {
            return null
        } else {
            let results = [];
            const traverseInOrder = tNode => {
                tNode.left && traverseInOrder(tNode.left);
                results.push(tNode);
                tNode.right && traverseInOrder(tNode.right);
            }
            traverseInOrder(node);
            return results;
        }
    }

    /** 
      * BST Depth First Traversal
      * 2. A preorder traversal visits the root node first, followed by the nodes in the subtrees under 
      *    the left child of the root node, followed by the nodes in the subtrees under the right child 
      *    of the root node.
      * @param {Node} node : the root node of a BST
      * @return {Node[]} a Node Array or null if the BST is null
      */
    preOrder = (node = this.root) => {
        if (node == null) {
            return null
        } else {
            let results = [];
            const traversePreOrder = tNode => {
                results.push(tNode);
                tNode.left && traversePreOrder(tNode.left);
                tNode.right && traversePreOrder(tNode.right);
            }
            traversePreOrder(node);
            return results;
        }
    }

    /**
      * BST Depth First Traversal
      * 3. A postorder traversal visits all of the child nodes of the left subtree up to the root node, 
      *    and then visits all of the right subtree up to the root node.
      * @param {Node} node : the root node of a BST
      * @return {Node[]} a Node Array or null if the BST is null
      */
    postOrder = (node = this.root) => {
        if (node == null) {
            return null;
        } else {
            let results = [];
            const traversePostOrder = tNode => {
                tNode.left && traversePostOrder(tNode.left);
                tNode.right && traversePostOrder(tNode.right);
                results.push(tNode);
            }
            traversePostOrder(node);
            return results;
        }
    }

    /**
     * BST Breadth First Traversal
     * 4. A level order traversal is to visit nodes level by level from left to right
     * @param {Node} node : the root node of a BST
     * @return {Node[]} a Node Array or null if the BST is null
     */
    levelOrder = (node = this.root) => {
        let results = [];
        let Q = [];
        if(node != null) {
            Q.push(node);
            while(Q.length > 0) {
                let currNode = Q.shift();
                results.push(currNode);
                currNode.left && Q.push(currNode.left);
                currNode.right && Q.push(currNode.right);
            }
            return results;
        } else {
            return null;
        }
    }

    /**
     * BST Searches
     * Searching for the minimum value
     *  algorithm: traverse the left edge of the BST until you get to the last node
     */
    getMin = () => {
        let curr = this.root;
        while (curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }

    /**
     * BST Searches
     * Searching for the maximum value
     *  algorithm: traverse the right links of nodes until the function reaches the right end of BST
     */
    getMax = () => {
        let curr = this.root;
        while (curr.right != null) {
            curr = curr.right;
        }
        return curr;
    }

    /**
     * BST Searches
     * Searching for a specific value
     * @return {Node} the current node if the value is found in the BST
     * and returns null if the value is not found.
     */
    find = data => {
        let curr = this.root;
        while (curr != null && curr.data != data) {
            if (data < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return curr;
    }

    /**
     * Removing Nodes from BST
     * First step: check to see if the current node holds the data we are trying to remove.
     *          - yes: remove the node
     *          - no: compare the data in current node to the data we are trying to remove.
     * cases to consider:
     *  1. when the node to be removed is a leaf (a node with no children)
     *     set the link that is pointing to the parenet node to null
     *  2. when the node to be removed has one child. the link that is pointing to 
     *     the node to be removed has to be adjusted to point to the removed node's child node
     *  3. when the node to be removed haw two children, the correct solution is to 
     *     either find the largest value in the subtree to the left of the removed node,
     *     or to find the smallest value in the subtree to the right of the removed node.
     *     [here we choose right]:
     *     we need a function that finds the smallest value of a substree, which will be used to
     *     create a temporary node containing that smallest value.
     *     we copy that value into the position of the node we are replacing, 
     *     and we delete the temporary node to complete the operation.
     * @param {T} data: the data of the node to be removed
     */
    remove = data => {
        const removeNode = (node, data) => {

            if (node == null)
                return null;

            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if (node.left == null) {
                    return node.right;
                }

                // node has no right child
                if (node.right == null) {
                    return node.left;
                }

                // node has two children
                const tempNode = node.right.getMin();
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        this.root = removeNode(this.root, data);
    }

    /**
     * add data to the BST and update its count
     * Counting Occurences: One use of a BST is to keep track of the occurences of data in a data set
     * @return {void}
     */
    upsert = data => {
        let node = this.find(data);
        if (!!node) {
            node.count++;
            return node;
        } else {
            return this.insert(data);
        }
    }

    /**
     * The minimum height of the BST is the distance from the root node to the first leaf node without two children
     * @return {number} the minimum height of the BST
     */
    findMinHeight = (node = this.root) => {
        if (node == null)
            return -1;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    /**
     * The maximum height of the BST is the distance from the root node to the most bottom node.
     * @return {number} the maximum height of the BST
     */
    findMaxHeight = (node = this.root) => {
        if (node == null)
            return -1;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    /**
     * A BST is balanced if the difference of the minimum height and the maximum height of the BST is less than one
     */
    isBalanced = (node = this.root) => this.findMaxHeight(node) - this.findMinHeight(node) <= 1;
}

module.exports = BST;