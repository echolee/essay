class Queue {
    constructor(capacity) { // 数组实现循环队列
        this.array = new Array(capacity);
        this.front = 0;
        this.rear = 0;
    }

    enQueue(element) { // 入队
        if((this.rear + 1) % this.array.length === this.front) { // 队列已满
            throw new Error('队列已满');
        }

        this.array[this.rear] = element;
        this.rear = (this.rear + 1) % this.array.length;
    }

    deQueue() { // 出队
        if (this.rear === this.front) {
            throw new Error('队列已空');
        }

        let deQueueElement = this.array[this.front];
        this.front = (this.front + 1) % this.array.length;
        return deQueueElement;
    }

    output() { //输出
        for (let i = this.front; i !== this.rear; i = (i + 1) % this.array.length) {
            console.log(this.array[i]);
        }
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
myQueue.output();
myQueue.deQueue();
myQueue.output();
