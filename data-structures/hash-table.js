/*
 * 开链法解决哈希冲突
 */
class hashTable {
    constructor(size) {
        this.table = new Array(size);

        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }

    simpleHash(data) { // 哈希函数把key转换称数组下标
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }

        return total % this.table.length;
    }

    put(data) {
        var pos = this.simpleHash(data);
        var index = 0;

        if(this.table[pos][index] === undefined) {
            this.table[pos][index] = data;
            index++;
        } else {
            while(this.table[pos][index] !== undefined) {
                index++;
            }
            this.table[pos][index] = data;
        }
    }

    delete(data) {
        let index = this.simpleHash(data);
        this.table[index] = null;
        this.length--;
    }

    has(data) {
        let index = this.simpleHash(data);

        if (this.table[index]) {
            return true;
        }
    }

    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            console.log(i, this.table[i]);
        }
    }
}

const myHashTable = new hashTable(10);
myHashTable.put('LXJ');
myHashTable.put(30);
myHashTable.put('FE');
myHashTable.put('beijing');
myHashTable.put('food');
myHashTable.delete('food');
myHashTable.put('music');
myHashTable.showDistro();
