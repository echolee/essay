# essay
JS实现数据结构与算法杂记

## 数据结构

### 链表
    链表(linked list)是一种在物理上非连续，非顺序的数据结构，有若干节点组成。
    单向链表每个节点包含两个部分，一部分是存放元素本身的数据，一部分是指向下一个节点的引用(指针)。
    双向链表比单向列表稍微复杂一点，每个节点除了包含元素本身和下一个节点的指针，还包含了前置节点的指针。
    链表的特点是随机存储，顺序访问，不存在数组的扩容问题。因为要存储一些指针，相对数组要消耗更多存储空间。
    常见操作有查找节点，更新节点，插入节点，删除节点。
    查找的最坏时间复杂度O(n), 插入和删除的时间复杂度（1）
    JS实现链表的代码：linked-list.js