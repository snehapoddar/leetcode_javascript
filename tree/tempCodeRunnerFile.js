function TreeNode(val) {
   this.val = val;
    this.left = this.right = null;
}
var root = null;
var arr = [3,9,20,15,7];

for( var i =0; i< arr.length; i++) {
    root = insert(arr[i]);
}
function insert(num){
    var newNode = new TreeNode(num);
    if(root === null){
        root = newNode;
        return root;
    }
    cur = root;
    while(cur!=null){
        if(cur.val == num) {
            return root;
        }
        if(cur.val>num) {
            if(cur.left == null){
                cur.left = newNode
            }
            cur = cur.left
        } else {
            if(cur.right == null){
                cur.right = newNode
            }
            cur = cur.right;
        }
    }
    return root;
};
console.log(root);
function getMaxDepth(root){
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
}

console.log(getMaxDepth(root));

function getLongestPath(root) {
    var array = {
        node: root,
        height: 1,
        path: 'root.val',
    }
    var longestPath = '';
    while(array.length){
        var obj = array.shift();
        var height = obj.height+1;
        var path = obj.path + '->';
        if(obj.node.left){
            array.push({node: obj.node.left, height, path})
        }
        if(obj.node.right){
            array.push({node: obj.node.right, height, path })
        }
        console.log(array);
    }
}
console.log(getLongestPath(root));