class Node { // 单向链表实现队列
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enQueue(element) {
        let node = new Node(element);

        if (this.length === 0) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }

        this.length++;
    }

    deQueue() {
        if (this.length === 0) {
            throw new Error('队列已空');
        }
    
        let deQueueElmenet = this.front;
        this.front = deQueueElmenet.next;
        this.length--;
        return deQueueElmenet;
    }

    toString() {
        let str = "";
        let current = this.front;

        while(current) {
            str += current.data + " ";
            current = current.next;
        }

        return str;
    }
}

const myQueue = new Queue(8);
myQueue.enQueue(4);
myQueue.enQueue(5);
myQueue.enQueue(2);
myQueue.enQueue(0);
myQueue.enQueue(9);
myQueue.enQueue(1);
myQueue.enQueue(6);
console.log(myQueue.toString());
myQueue.deQueue();
console.log(myQueue.toString());