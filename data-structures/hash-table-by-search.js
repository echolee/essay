/*
 * 线性探测法解决哈希冲突
 */
class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.values = [];
    }

    betterHash(str) { // 哈希函数把key转换称数组下标
        const H = 37; // 确保数组大小是个质数
        let total = 0;

        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }

        total = total % this.table.length;

        if (total < 0) {
            total += this.table.length - 1;
        }

        return total;
    }

    put(key, data) {
        var pos = this.betterHash(key);

        if (this.table[pos] === undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        } else {
            while(this.table[pos] !== undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }

    get(key) {
        let pos = -1;
        pos = this.betterHash(key);

        if (pos > -1) {
            for (let i = pos; this.table[pos] !== undefined; i++) {
                if (this.table[pos] === key) {
                    return this.values[pos];
                }
            }
        }

        return undefined;
    }

    delete(key) {
        let pos = this.betterHash(key);
        this.table[pos] = undefined;
        this.values[pos] = undefined;
    }

    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(this.table[i] + ' --> ' + this.values[i]);
            }
        }
    }
}

const myHashTable = new hashTable(100);
myHashTable.put('name', 'LXJ');
myHashTable.put('age', 30);
myHashTable.put('work', 'FE');
myHashTable.put('city', 'beijing');
myHashTable.put('hobby', 'food');
myHashTable.delete('hobby');
myHashTable.put('hobby', 'music');
myHashTable.get('hobby');
myHashTable.showDistro();
