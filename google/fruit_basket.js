var nums = [3,3,3,1,2,1,1,2,3,3,4];
var map = new Map();
var max = 1;
var i = 0;
var j = 0;

while(j<nums.length){
    //Step 1 - get the last index of the first 2 fruits
    if(map.size<=2){
        map.set(nums[j], j++);
    }
    // Step 2 - when you encounter a different fruit find minIndex amoung the indices of last two fruits collected
    // delete that fruit from basket with minIndex
    // move i(start) to minIndex+1
    if(map.size>2){
        var minIndex = nums.length-1;
        map.forEach((value, key) => {
            minIndex = Math.min(minIndex, value);
        });
        map.delete(nums[minIndex]);
        i = minIndex+1;
    }
    console.log(map);
    //find how many fruits you collected from i to j and compare with previous max
    max = Math.max(max, j-i);
}
console.log(max);