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
    var node = arr.pop();
    nums.push(node.val);
    for(var i = 0; i<node.children.length; i++) {
        arr.unshift(node.children[i]);
    }
}
console.log(nums);

let value = true;
[false].forEach(x => {
    let value = x;
});
console.log(value);

const x = {
    value: true
};
console.log(x.value);
const y = {
    value: true,
    ...x,
}
console.log(y.value);


class c {
    constructor() {
        const value = true;
    }
}
console.log(Math.sum(1,2,3))