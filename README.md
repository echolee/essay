# essay
JS实现数据结构与算法杂记

## 数据结构
    数组和链表是最基础的线性数据结构，由它们衍生了栈，队列以及哈希(散列)表等等。
    非线性的数据结构还有树，图等。
    后续的内容将基于ES6语法实现这些常见的数据结构。

### 链表
    链表(linked list)是一种在物理上非连续，非顺序的数据结构，有若干节点组成。
    单向链表每个节点包含两个部分，一部分是存放元素本身的数据，一部分是指向下一个节点的引用(指针)。
    双向链表比单向列表稍微复杂一点，每个节点除了包含元素本身和下一个节点的指针，还包含了前置节点的指针。
    链表的特点是随机存储，顺序访问，不存在数组的扩容问题。因为要存储一些指针，相对数组要消耗更多存储空间。
    常见操作有查找节点，更新节点，插入节点，删除节点。
    查找的最坏时间复杂度O(n), 插入和删除的时间复杂度（1）
    ![单向链表](./data-structures/linked-list.js)
    ![双向链表](./data-structures/double-linked-list.js)

### 栈
    栈(stack)是一种线性数据结构，栈中的元素只能先入后出（First In Last Out,简称FILO）。
    最早进入的元素存放的位置叫栈底(bottom)，最后进入的元素存放的位置叫栈顶（top）。
    栈这种数据结构可以用数组实现，也可以用链表实现。
    常见操作有入栈和出栈，数组和链表实现的出入栈的时间复杂度都是O(1)。

### 队列
    队列(queue)是一种线性数据结构，队列中的元素只能先入先出（First In First Out,简称FIFO）。
    最早进入的元素存放的位置叫队首(front)，最后进入的元素存放的位置叫队尾（rear）。
    队列这种数据结构，同样可以用数组实现，也可以用链表实现。
    常见操作有入队和出队。
    数组实现队列如果存在不断出队，会导致队头做不的空间失去作用，可以采用循环队列的方式来维持队列容量的恒定。
    循环队列：
        队尾下标的计算公式：(队尾下标 + 1) % 数组长度
        队首下标的计算公式：(队首下标 + 1) % 数组长度

