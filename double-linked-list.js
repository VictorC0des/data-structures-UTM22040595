class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        if (!data) {
            return "No data"
        }
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode
        }


    }

    prepend(data) {
        if (!data) {
            return "No data"
        }
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

        }
    }

}
