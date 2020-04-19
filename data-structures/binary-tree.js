// 递归实现二叉树
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
    preOrderTraveral(node) {
        if (node === null) {
            return;
        }

        console.log('pre', node.data);
        this.preOrderTraveral(node.left);
        this.preOrderTraveral(node.right);
    }

    // 中序遍历
    inOrderTraveral(node) {
        if (node === null) {
            return;
        }

        this.inOrderTraveral(node.left);
        console.log('in', node.data);
        this.inOrderTraveral(node.right);
    }

    // 后序遍历
    postOrderTraveral(node) {
        if (node === null) {
            return;
        }

        this.postOrderTraveral(node.left);
        this.postOrderTraveral(node.right);
        console.log('post', node.data);
    }
}

let bt = new BinaryTree();
const list = [9, 16, 5, 20, 18, 12, 59];
list.forEach(item => {
    bt.insert(item);
});
bt.preOrderTraveral(bt.root);
bt.inOrderTraveral(bt.root);
bt.postOrderTraveral(bt.root);
