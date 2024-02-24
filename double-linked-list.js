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

    insertAfterNode(data, newData) {
        const newNode = new Node(newData);
        let current = this.head;
        while (current) {
            if (current.data === data) {
                newNode.next = current.next;
                newNode.prev = current;
                if (current.next) {
                    current.next.prev = newNode;
                }
                current.next = newNode;
                if (newNode.next === null) {
                    this.tail = newNode;
                }
                return;
            }
            current = current.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay";
        }
        let current = this.head;
        while (current) {
            if (current.data === element) {

                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                }

                else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                }

                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

}
