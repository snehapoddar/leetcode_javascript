const nums = [1,2,2,3];

var thirdMax = function(nums) {
    nums = nums.sort();
    const set = new Set(nums);
    const max = Math.max(set);
    if(set.size<3) return max;
    
    return set[set.size-3];
};
console.log(thirdMax(nums));