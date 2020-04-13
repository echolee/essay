class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(element) {
        let node = new Node(element);

        if (this.length === 0) {
            this.top = this.bottom = node;
        } else {
            this.bottom.next = node;
            this.bottom = node;
        }

        this.length++;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('栈已空');
        }

        let current = this.top;
        let prev;

        while(current.next) {
            prev = current;
            current = current.next;
        }

        this.bottom = prev;
        this.bottom.next = null;
        this.length--;

        return current;
    }

    toString() {
        let str = "";
        let current = this.top;

        while(current) {
            str += current.data + " ";
            current = current.next;
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
