#!/usr/bin/env node

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }
    
    removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    sortArray(arr) {
        return arr.sort((a, b) => a - b);
    }

    buildTree(arr) {
        const readyArray = this.sortArray(this.removeDuplicates(arr));

        if(readyArray.length === 0) {
            return null;
        }

        const middleIndex = Math.floor(readyArray.length / 2);
        const root = new Node(readyArray[middleIndex]);

        root.left = this.buildTree(readyArray.slice(0, middleIndex));
        root.right = this.buildTree(readyArray.slice(middleIndex + 1));

        return root;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if(node === null) {
            return null;
        } else if(value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if(value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            const newNode = this.findMinNode(node.right);
            node.value = newNode.value;

            node.right = this.deleteNode(node.right, newNode.value);
            return node;
        }
    }

    findMinNode(node) {
        if(node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    find(node, value) {
        if(node === null) {
            return null;
        } else if(value < node.value) {
            return this.find(node.left, value);
        } else if(value > node.value) {
            return this.find(node.right, value);
        } else {
            return node;
        }
    }

    levelOrder(node) {
        if(node === null) {
            return;
        }

        const queue = [];
        queue.push(node);

        while(queue.length > 0) {
            const node = queue.shift();
            console.log(node.value);

            if(node.left !== null) {
                queue.push(node.left);
            }

            if(node.right !== null) {
                queue.push(node.right);
            }
        }
    }




}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];// sorted array: [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]

const tree = new Tree(arr);

tree.insert(10);
tree.insert(119999);
tree.delete(23);

console.log(prettyPrint(tree.root));

tree.levelOrder(tree.root);

