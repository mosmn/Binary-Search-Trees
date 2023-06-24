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

console.log(prettyPrint(tree.root));

