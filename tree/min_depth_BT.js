function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var root = null;
var arr = [3, 2, 1, 5];

for (var i = 0; i < arr.length; i++) {
    root = insert(arr[i]);
}

function insert(num) {
    var newNode = new TreeNode(num);
    if (root === null) {
        root = newNode;
        return root;
    }
    cur = root;
    while (cur != null) {
        if (cur.val == num) {
            return root;
        }
        if (cur.val > num) {
            if (cur.left == null) {
                cur.left = newNode
            }
            cur = cur.left
        } else {
            if (cur.right == null) {
                cur.right = newNode
            }
            cur = cur.right;
        }
    }
    return root;
};
console.log(root);

function minDepth(root) {
    if (!root) return 0;
    const array = [{
        node: root,
        height: 1
    }]
    while (array.length) {
        const current = array.shift();
        if (!current.node.left && !current.node.right) {
            return current.height;
        }
        if (current.node.left) array.push({
            node: current.node.left,
            height: current.height + 1
        });
        if (current.node.right) array.push({
            node: current.node.right,
            height: current.height + 1
        });
    }
}

console.log(minDepth(root));