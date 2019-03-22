
var LRUCache = function(capacity) {
    this.map = new Map();
    this.size = capacity;
    this.leastFrequentlyUsed = new Set();
};

LRUCache.prototype.get = function(key) {
    if(this.map.get(key)){
      this.leastFrequentlyUsed.delete(this.map.get(key));
      return this.map.get(key);
    } else {
      return -1;
    }
};

LRUCache.prototype.put = function(key, value) {
    if(this.map.size < this.size) {
        this.leastFrequentlyUsed.add(value);
    } else {
        var leastUsed  = [...this.leastFrequentlyUsed][0];
        this.leastFrequentlyUsed.delete(leastUsed);
        this.map.delete(leastUsed);
    }
    this.map.set(key,value);
};
var cache = LRUCache(2);
console.log(cache.size);

console.log(cache.put(1,1));
console.log(cache.put(2,2));
console.log(cache.get(1));
// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]