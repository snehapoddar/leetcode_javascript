var nums = [2,7,9,3,1];
var max = num[0];
if(nums.length == 1) return nums[0];
if(nums.length == 2) return Math.max(nums[0], nums[1]);
if(nums.length == 3) return Math.max(nums[0]+ nums[2], nums[1]);
if(nums.length == 4) return Math.max(nums[0]+ nums[2], nums[1]+ nums[3]);
for(var i=1; i<nums.length; i++){

}