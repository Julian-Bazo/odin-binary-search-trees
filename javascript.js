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

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(dataArray) {
        this.dataArray = dataArray;
        this.root = null;
    }

    buildTree() {
        let array = sort(this.dataArray);
        console.log("Array Sorted:")
        console.log(array)
        const midPoint = Math.floor(array.length/2)
        this.root = array[midPoint];
        console.log("Root selected:")
        console.log(this.root);
        const rootNode = new Node(this.root);
        console.log(rootNode);


        return this.root;
    }

    printTree() {
        prettyPrint(this.root);
    }
}



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

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const testTree = new Tree(testArray);
testTree.buildTree();
// testTree.printTree();