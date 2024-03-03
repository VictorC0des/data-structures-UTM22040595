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

    pop() {
        if (this.isEmpty()) {
            return "The stack is empty"
        }

        else {
            return this.items.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return "The stack is empty"
        }

        else{
            return this.items[this.items.length - 1]
        }
    }

    size(){
        if(this.isEmpty()){
            return "The stack is empty"
        }
        else{
            return this.items.length
        }
    }
}