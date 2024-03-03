class queue {
    constructor() {
        this.items = []

    }
    enqueue(elememento) {
        this.items.push(elememento)

    }

    dequeue() {
        if (this.isEmpty()) {
            return ("The queue is empty")
        }
        else {
            return this.items.shift()

        }
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

   

}


