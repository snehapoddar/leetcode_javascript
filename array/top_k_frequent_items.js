var nums = [1,1,1,2,2,2,2,3];
var k = 2;
nums = nums.sort((a,b) => a-b);
var i = 0;
var map = new Map();
while(i<nums.length){
    count = nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) + 1;
    map.set(nums[i], count);
    i += count;
}

var result = [];
var arr = [...map].sort((a,b) => b[1]-a[1]);
for(i=0; i<k; i++){
    result.push(arr[i][0]);
}