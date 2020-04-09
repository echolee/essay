// 单向链表
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null
    }

    append(element) { //新增节点
        let node = new Node(element);
        let current = this.head;

        if (this.head === null) { //头节点
            this.head = node;
        } else {
            while(current.next) { //遍历直到当前节点为尾节点
                current = current.next;
            }

            current.next = node;
        }
        
        this.length++;
    }

    insert(element, pos) { //插入节点
        let node = new Node(element);
        let prev;
        let current = this.head;
        let index = 0;

        if (pos >= 0 && pos <= this.length) {
            if (pos === 0) { // 插入首部
                this.head = node;
                node.next = current;
            } else {
                while(index++ < pos) {
                    prev = current;
                    current = current.next;
                }

                node.next = current;
                prev.next = node;
            }

            this.length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos) { //通过位置删除节点
        let current = this.head;
        let prev;
        let index = 0;

        if (pos >= 0 && pos <= this.length) {
            if (pos === 0) {
                this.head = current.next;
            } else {
                while(index++ < pos) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }

            this.length--;
            return current.data;
        } else {
            return null;
        }
    }

    indexOf(element) { //查找元素节点位置
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

    remove(element) { //通过元素删除节点
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
}
