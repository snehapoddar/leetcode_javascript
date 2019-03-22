var root = {
    "$id": "1",
    "children": [{
        "$id": "2",
        "children": [{
            "$id": "5",
            "children": [],
            "val": 5
        }, {
            "$id": "6",
            "children": [],
            "val": 6
        }],
        "val": 3
    }, {
        "$id": "3",
        "children": [],
        "val": 2
    }, {
        "$id": "4",
        "children": [],
        "val": 4
    }],
    "val": 1
};
if(!root) return [];
var nums = [];
var arr = [root];
while(arr.length){
    var node = arr.shift();
    nums.push(node.val);
    for(var i = 0; i<node.children.length; i++) {
        arr.push(node.children[i]);
    }
}
console.log(nums);
