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

   

}


