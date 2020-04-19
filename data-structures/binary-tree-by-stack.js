// 非递归实现二叉树
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data, null, null);

        // 如果不存在节点，则此节点为根节点
        if (this.root === null) {
            this.root = node;
        } else {
            // 存在根节点时
            let current = this.root;
            let parent;

            while(current) {
                parent = current;

                if (data < current.data) { // 左节点
                    current = current.left;

                    if (current === null) {
                        parent.left = node;
                        break;
                    }
                } else { // 右节点
                    current = current.right;

                    if (current === null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    // 前序遍历
    preOrderTraveralWithStack() {
        let stack = [];
        let res = [];
        let curr;

        if (this.root !== null) {
            stack.push(this.root);
        }

        while (stack.length !== 0 ) {
            curr = stack.pop();
            res.push(curr.data);

            if (curr.right !== null) {
                stack.push(curr.right);
            }

            if (curr.left !== null) {
                stack.push(curr.left);
            }
        }

        return res;
    }

    // 中序遍历
    inOrderTraveralWithStack() {
        let stack = [];
        let res = [];
        let curr = this.root;

        if (this.root === null) {
            return [];
        }

        while (stack.length !== 0 || curr !== null) {
            if (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            } else {
                let node = stack.pop();
                res.push(node.data);
                curr = node.right;
            }
        }

        return res;
    }

    // 后序遍历
    postOrderTraveralWithStack() {
        let res = [];
        let stack = [];
        let curr;

        if (this.root !== null) {
            stack.push(this.root);
        }

        while(stack.length !== 0) {
            curr = stack.pop();
            res.push(curr.data);

            if (curr.left !== null) {
                stack.push(curr.left);
            }

            if (curr.right !== null) {
                stack.push(curr.right);
            }
        }

        return res.reverse();
    }
}

let bt = new BinaryTree();
const list = [9, 16, 5, 20, 18, 12, 59];
list.forEach(item => {
    bt.insert(item);
});
console.log(bt.preOrderTraveralWithStack());
console.log(bt.inOrderTraveralWithStack());
console.log(bt.postOrderTraveralWithStack());
