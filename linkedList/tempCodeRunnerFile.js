
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
var node2 = new Node(2, null, null);
node2.random = node2;
var node1 = new Node(1, node2, node2);
var head = node1;
console.log(head);