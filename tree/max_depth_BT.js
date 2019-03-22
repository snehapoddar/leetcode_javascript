function TreeNode(val) {
   this.val = val;
    this.left = this.right = null;
}
var root = null;
var arr = [3,9,20,15,7,4,5,6,1,80];

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
//console.log(root);
function getMaxDepth(root){
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
}

//console.log(getMaxDepth(root));

function getLongestPath(root) {
    var array = [{
        node: root,
        height: 1,
        path: root.val.toString(),
    }];
    var longestPath = '';
    var maxHeight = 0;
    while(array.length){
        var obj = array.shift();
        var height = obj.height+1;
        if(obj.node.left){
            var path = obj.path + '->' + obj.node.left.val.toString();
            array.push({node: obj.node.left, height, path})
        }
        if(obj.node.right){
            var path = obj.path + '->' + obj.node.right.val.toString();
            array.push({node: obj.node.right, height, path })
        }
        if(!obj.node.left && !obj.node.right) {
            if(maxHeight<obj.height){
                maxHeight = obj.height;
                longestPath = obj.path;
            }
        }
    }
    return longestPath;
}
console.log(getLongestPath(root));