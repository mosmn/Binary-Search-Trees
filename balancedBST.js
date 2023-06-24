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

