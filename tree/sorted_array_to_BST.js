function TreeNode(val) {
    this.val = val;
     this.left = this.right = null;
 }

var nums = [-10,-3,0,5,9,8];
var root = sortedArrayToBST(nums);
console.log(root);
function sortedArrayToBST(nums){
    if(nums.length>0){
        var midIndex = Math.floor((nums.length)/2);
        var root = new TreeNode(nums[midIndex]);
        var leftnums = nums.slice(0,midIndex);
        var rightnums = nums.slice(midIndex+1, nums.length)
        root.left = sortedArrayToBST(leftnums);
        root.right = sortedArrayToBST(rightnums);
    }
    return root;
}

function getMaxDepth(root){
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
}

console.log(getMaxDepth(root));