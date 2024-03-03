class stack {
    constructor() {
        this.items = []
    }
    push(elememento) {
        this.items.push(elememento)
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