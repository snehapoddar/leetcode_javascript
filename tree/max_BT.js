const nums = [3, 2, 1, 6, 0, 5];

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructMaximumBinaryTree = function (nums) {
    let head = null;
    if (nums.length < 1) return head;
    const max = Math.max(...nums);
    const splitIndex = nums.indexOf(max);
    head = new TreeNode(max);
    head.left = constructMaximumBinaryTree(nums.slice(0, splitIndex));
    head.right = constructMaximumBinaryTree(nums.slice(splitIndex + 1, nums.length));
    return head;
};

console.log(constructMaximumBinaryTree(nums));