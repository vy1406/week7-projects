class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode
        }
    }
    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode
        }
    }
}
class BSNode extends Node {
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value) {
        if (this.value == value) return true

        else if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value)
        }
        else if (value <= this.value && this.leftChild) {
            return this.leftChild.findNode(value)
        }

        return false
    }
    findCommonParent(root, val1, val2) {

        
    }
}

// Exercise 1
let letters = ["H", "E", "S", "G", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))
console.log(bSTree.findNode("H"))
console.log(bSTree.findNode("G"))
console.log(bSTree.findNode("Z"))
console.log(bSTree.findNode("F"))
console.log(bSTree.findNode("y"))
console.log(bSTree)

// Exercise 2
letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))

console.log(bSTree.findCommonParent("B", "I")) //should return H
console.log(bSTree.findCommonParent("B", "G")) //should return E
console.log(bSTree.findCommonParent("B", "L")) //should return J
console.log(bSTree.findCommonParent("L", "Y")) //should return R
console.log(bSTree.findCommonParent("E", "H")) //should return J


console.log(bSTree)