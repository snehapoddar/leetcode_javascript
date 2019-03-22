var nums = [1,3,2,2,2];
var minIndex = -1;
var maxIndex = -1;
for(var i = 0; i<nums.length-1; i++){
    if(nums[i] > nums[i+1] && minIndex === -1) {
        minIndex = i;
    }
    if(nums[i] > nums[i+1] && maxIndex < i) {
        minIndex = i;
    }
}

for(var i = nums.length-1; i>0; i--){
    if(nums[i-1] > nums[i]) {
        maxIndex = i;
        break;
    }
}
console.log(minIndex, maxIndex);