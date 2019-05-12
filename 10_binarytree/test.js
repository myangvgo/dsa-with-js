const BST = require('./bst');

// insert
let nums = new BST();
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
nums.insert(1)

// traversal 
let inOrderNums = nums.inOrder() || [];
console.log("InOrder traversal:", inOrderNums.map(x => x.data));

let preOrderNums = nums.preOrder() || [];
console.log("PreOrder traversal:", preOrderNums.map(x => x.data));

let postOrderNums = nums.postOrder() || [];
console.log("PostOrder traversal:", postOrderNums.map(x => x.data));

let levelOrderNums = nums.levelOrder() || [];
console.log("LevelOrder traversal:", levelOrderNums.map(x => x.data));


// search
const minNode = nums.getMin();
const maxNode = nums.getMax();
console.log("The minimum value of the BST is:", !!minNode ? minNode.data : null);
console.log("The maximum value of the BST is:", !!maxNode ? maxNode.data : null);
console.log("2 can be found in the BST:", !!nums.find(2));
console.log("22 can be found in the BST:", !!nums.find(22));

// remove
nums.remove(22);
console.log("PreOrder traversal:");
nums.preOrder(nums.root);

// count occurences
nums.upsert(45);
nums.upsert(99);
let inOrderNumsCounting = nums.inOrder() || [];
console.log("InOrder traversal for counting occurences:", inOrderNumsCounting.map(x => `${x.data} : ${x.count}`));

// min height, max height, tree balance
console.log("The minimum height of the tree is", nums.findMinHeight());
console.log("The maximum height of the tree is", nums.findMaxHeight());
console.log("BST is balanced: ", nums.isBalanced());
nums.remove(1);
console.log("After removal of 1:");
console.log("The minimum height of the tree is", nums.findMinHeight());
console.log("The maximum height of the tree is", nums.findMaxHeight());
console.log("BST is balanced: ", nums.isBalanced());
