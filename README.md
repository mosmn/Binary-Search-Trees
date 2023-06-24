# Balanced Binary Search Tree

This project implements a balanced binary search tree in JavaScript. It includes functionality to insert and delete nodes, find nodes, perform tree traversals, calculate height and depth of nodes, check if the tree is balanced, and rebalance the tree.

## Node Class

The `Node` class represents a node in the binary search tree. It has the following attributes:

- `data`: The value stored in the node.
- `left`: The left child of the node.
- `right`: The right child of the node.

## Tree Class

The `Tree` class represents the binary search tree. It is initialized with an array of data, which is used to build a balanced tree. It has the following methods:

- `buildTree(arr)`: Builds a balanced binary search tree from an array of data. It returns the root node of the tree.
- `insert(value)`: Inserts a node with the given value into the tree.
- `delete(value)`: Deletes a node with the given value from the tree.
- `find(value)`: Finds a node with the given value in the tree and returns it.
- `levelOrder(callback)`: Performs a level-order traversal of the tree and calls the provided callback function for each visited node.
- `inorder(callback)`: Performs an inorder traversal of the tree and calls the provided callback function for each visited node.
- `preorder(callback)`: Performs a preorder traversal of the tree and calls the provided callback function for each visited node.
- `postorder(callback)`: Performs a postorder traversal of the tree and calls the provided callback function for each visited node.
- `height(node)`: Calculates the height of the given node.
- `depth(node)`: Calculates the depth of the given node.
- `isBalanced(node)`: Checks if the tree is balanced.
- `rebalance()`: Rebalances the tree.

## Usage

To create a binary search tree and perform operations on it, follow these steps:

1. Create an instance of the `Tree` class with an array of random numbers less than 100.
2. Check if the tree is balanced using the `isBalanced()` method.
3. Print out the elements of the tree in level, preorder, postorder, and inorder using the corresponding traversal methods.
4. Unbalance the tree by adding several numbers greater than 100.
5. Check if the tree is unbalanced using the `isBalanced()` method.
6. Rebalance the tree using the `rebalance()` method.
7. Check if the tree is balanced again using the `isBalanced()` method.
8. Print out the elements of the tree after rebalancing using the traversal methods.

Example:

```javascript
// Create a binary search tree
const randomNumbers = generateRandomNumbers(10, 100);
const tree = new Tree(randomNumbers);

// Check if the tree is balanced
console.log("Is the tree balanced?", tree.isBalanced());

// Print out all elements in level, preorder, postorder, and inorder
console.log("Level order traversal:");
tree.levelOrder((node) => console.log(node.data));

console.log("Preorder traversal:");
tree.preorder((node) => console.log(node.data));

console.log("Postorder traversal:");
tree.postorder((node) => console.log(node.data));

console.log("Inorder traversal:");
tree.inorder((node) => console.log(node.data));

// Unbalance the tree
tree.insert(110);
tree.insert(120);
tree.insert(130);

// Check if the tree is unbalanced
console.log("Is the tree balanced?", tree.isBalanced());

// Rebalance the tree
tree.rebalance();

// Check

 if the tree is balanced after rebalancing
console.log("Is the tree balanced?", tree.isBalanced());

// Print out all elements in level, preorder, postorder, and inorder after rebalancing
console.log("Level order traversal after rebalancing:");
tree.levelOrder((node) => console.log(node.data));

console.log("Preorder traversal after rebalancing:");
tree.preorder((node) => console.log(node.data));

console.log("Postorder traversal after rebalancing:");
tree.postorder((node) => console.log(node.data));

console.log("Inorder traversal after rebalancing:");
tree.inorder((node) => console.log(node.data));
```

## Acknowledgments

- The `prettyPrint` function used for visualizing the binary search tree is adapted from [this Stack Overflow answer](https://stackoverflow.com/a/48482071).