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
        let node = new Node(element);
        let current = this.head;
        let prev;
        let index = 0;

        if (pos >= 0 && pos <= this.length) {
            if (pos === 0) { // 头部
                if (this.head === null) { // 空链表
                    this.head = node;
                    this.tail = node;
                } else {
                    this.head = node;
                    head.next = current;
                    current.prev = node;
                }
            } else if (pos === this.length) { // 尾部
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while(index++ < pos) { // 遍历到插入位置
                    prev = current;
                    current = current.next;
                }

                node.next = current;
                node.prev = prev;
                prev.next = node;
                current.prev = node; 
            }

            this.length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos) { // 通过位置删除节点
        let current = this.head;
        let index = 0;
        let prev;

        if (pos >= 0 && pos < this.length) {
            if (pos === 0) { // 头部
                this.head = current.next;

                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (pos === length - 1) { // 尾部
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < pos) {
                    current = current.next;
                    prev = current.prev;
                }

                prev.next = current.next;
                current.next.prev = prev;
            }

            this.length--;
            return current.data;
        } else {
            return null;
        }
    }

    indexOf(element) { // 查找元素节点位置
        let current = this.head;
        let pos = 0;

        while(current) {
            if (current.data == element) {
                return pos;
            }

            pos++;
            current = current.next;
        }

        return -1;
    }

    remove(element) { // 通过元素删除节点
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    toString() {
        let current = this.head;
        let string = '';

        while(current) {
            string += ' ' + current.data;
            current = current.next;
        }

        return string;
    }
}

const doubleLinkList = new DoubleLinkedList();
doubleLinkList.append(5);
doubleLinkList.append(2);
doubleLinkList.append(0);
doubleLinkList.append(9);
doubleLinkList.append(2);
doubleLinkList.append(6);
doubleLinkList.removeAt(4);
console.log('before', doubleLinkList.toString());
doubleLinkList.insert(1, 4);
console.log('after', doubleLinkList.toString());