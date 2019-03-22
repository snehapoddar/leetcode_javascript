function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
var node2 = new Node(2, null, null);
node2.random = node2;
var node1 = new Node(1, node2, node2);
var head = node1;

console.log(copy(head, {}));

function copy(node, map) {
    if (!node) return node;
    if (map[node.val]) return map[node.val];
    let n = new Node(node.val);
    map[node.val] = n;
    n.next = copy(node.next, map);
    n.random = copy(node.random, map);
    return n;
}