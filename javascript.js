console.log("hi");

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

function sort(array) {
    array.sort((a, b) => a - b);

    let duplicateChecker = null;
    array.map((number) => {

        if (number === duplicateChecker) {
            array.splice(array.indexOf(number), 1);
        }
        duplicateChecker = number;
    })

    return array;
}

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }


    buildTree(array, start = 0, end = array.length - 1) {

        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);

        const node = new Node(array[mid]);
        console.log(node);

        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid + 1, end);

        return node;
    }
}



const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sortedTestArray = sort(testArray);
console.log(`Array Sorted: ${sortedTestArray}`);

const testTree = new Tree();
testTree.root = testTree.buildTree(sortedTestArray);
console.log(JSON.stringify(testTree.root, null, 2));



