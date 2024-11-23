// 덱 2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    pushFront(value) {
        const newNode = new Node(value)
        if (this.size === 0) this.front = this.rear = newNode
        else {
            newNode.next = this.front
            this.front.prev = newNode
            this.front = newNode
        }
        this.size++
    }

    pushBack(value) {
        const newNode = new Node(value)
        if (this.size === 0) this.front = this.rear = newNode
        else {
            newNode.prev = this.rear
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++ 
    }

    popFront() {
        if (this.size === 0) return -1
        const value = this.front.value
        this.front = this.front.next

        if (this.front) this.front.prev = null
        this.size--
        return value
    }

    popBack() {
        if (this.size === 0) return -1
        const value = this.rear.value
        this.rear = this.rear.prev

        if (this.rear) this.rear.next = null
        this.size--
        return value
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0 ? 1 : 0
    }

    getFront() {
        return this.size === 0 ? -1 : this.front.value
    }

    getBack() {
        return this.size === 0 ? -1 : this.rear.value
    }
}

const n = input[0]
const arr = input.splice(1)

const deque = new Deque()
const answer = []

for (let i=0; i<n; i++) {
    let temp = arr[i].split(" ").map(Number)

    switch (temp[0]) {
        case 1:
            deque.pushFront(temp[1])
            break
        case 2:
            deque.pushBack(temp[1])
            break
        case 3:
            answer.push(deque.popFront())
            break
        case 4:
            answer.push(deque.popBack())
            break
        case 5:
            answer.push(deque.getSize())
            break
        case 6:
            answer.push(deque.isEmpty())
            break
        case 7:
            answer.push(deque.getFront())
            break
        case 8:
            answer.push(deque.getBack())
            break
    }
}

console.log(answer.join("\n"));