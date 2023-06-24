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

    inorder(node) {
        if(node === null) {
            return;
        }

        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    preorder(node) {
        if(node === null) {
            return;
        }
        
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node) {
        if(node === null) {
            return;
        }

        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    height(node) {
        if(node === null) {
            return -1;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node) {
        if(node === null) {
            return -1;
        }

        let treesRoot = this.root;
        let depth = 0;

        while(treesRoot !== null) {
            if(node.value < treesRoot.value) {
                treesRoot = treesRoot.left;
            } else if(node.value > treesRoot.value) {
                treesRoot = treesRoot.right;
            } else {
                break;
            }

            depth++;
        }

        return depth;
    }

    isBalanced(node) {
        if(node === null) {
            return true;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if(Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
            return true;
        }

        return false;
    }

    rebalance() {
        const arr = [];
        this.inorderToArray(this.root, arr);
        this.root = this.buildTree(arr);
    }

    inorderToArray(node, arr) {
        if(node !== null) {
            this.inorderToArray(node.left, arr);
            arr.push(node.value);
            this.inorderToArray(node.right, arr);
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


const generateRandomNumbers = (n, max) => {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
}

const randomNumbers = generateRandomNumbers(10, 100);
const tree = new Tree(randomNumbers);

console.log("Is the tree balanced?", tree.isBalanced(tree.root));

console.log("Level order traversal:");
tree.levelOrder(tree.root);

console.log("Preorder traversal:");
tree.preorder(tree.root);

console.log("Postorder traversal:");
tree.postorder(tree.root);

console.log("Inorder traversal:");
tree.inorder(tree.root);

tree.insert(110);
tree.insert(120);
tree.insert(130);

console.log("Is the tree balanced?", tree.isBalanced(tree.root));

tree.rebalance();

console.log("Is the tree balanced?", tree.isBalanced(tree.root));

console.log("Level order traversal after rebalancing:");
tree.levelOrder(tree.root);

console.log("Preorder traversal after rebalancing:");
tree.preorder(tree.root);

console.log("Postorder traversal after rebalancing:");
tree.postorder(tree.root);

console.log("Inorder traversal after rebalancing:");
tree.inorder(tree.root);
