class Stack {
    constructor(capacity) {
        this.array = new Array(capacity);
        this.top = 0;
        this.bottom = 0;
    }

    push(element) {
        this.array[this.bottom] = element;
        this.bottom++;
    }

    pop() {
        if (this.top === this.bottom) {
            throw new Error('栈已空');
        }

        const popElement = this.array[this.bottom];
        this.bottom--;
        return popElement;
    }

    toString() {
        let str = "";

        for (let i = this.top; i < this.bottom; i++) {
            str += this.array[i] + " ";
        }

        return str;
    }
}

const myStack = new Stack(8);
myStack.push(5);
myStack.push(2);
myStack.push(0);
myStack.push(9);
myStack.push(1);
myStack.push(7);
console.log(myStack.toString());
myStack.pop();
console.log(myStack.toString());
myStack.push(6);
console.log(myStack.toString());
