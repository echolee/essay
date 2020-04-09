// 双向链表
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(element) { //新增节点
        let node = new Node(element);
        let current = this.head;

        if (this.head === null) { //头部
            this.head = node;
            this.tail = node;
        } else { //尾部
            current = this.tail;
            node.prev = current;
            current.next = node;
            this.tail = node;
        }

        this.length++;
    }

    insert(element, pos) { //插入节点

    }
}