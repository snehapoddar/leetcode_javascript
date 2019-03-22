function Queue() {
    this.data = [];
}
Queue.prototype.size = function () {
    return this.data.length;
}

Queue.prototype.add = function (element) {
    this.data.unshift(element);
}
Queue.prototype.remove = function () {
    this.data.pop();
}

var robotMax = 5;
var bins = [1, 2, 3, 4, 5, 6, 7];
const q = new Queue();

var binsPopped = 0;
for (var i = 0; i < bins.length; i++) {
    if (q.size() == robotMax) {
        q.remove();
        binsPopped++;
    }
    q.add(bins[i]);
}
console.log(q);
console.log(binsPopped);