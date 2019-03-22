// Algorithm 
// 1. find inversion index ( index just before where all the elements beyond it are reverse sorted)
// 2. find the element greater than inversion index
// 3. swap the elements
// 4. reverse sort from inversion index+1 till end of the element
var nums = [1,3,2];
var inversionIndex = -1;
var i = nums.length-1;
while(i>0){
    if(nums[i-1]<nums[i]) {
        inversionIndex = i-1;
        break;
    }
    i--;
}
if(inversionIndex === -1) {
    nums.reverse();
    return;
} 
console.log(inversionIndex);
for(var i = nums.length-1; i>inversionIndex; i--){
    if(nums[i]> nums[inversionIndex]){
        var temp = nums[inversionIndex];
        nums[inversionIndex] = nums[i];
        nums[i] = temp;
        break;
    }
}

nums = nums.slice(0, inversionIndex+1).concat(nums.slice(inversionIndex+1).reverse());

console.log(nums);
// var j = nums.length - 1;
// var i = inversionIndex +1;
// while (i < j) {
//     temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//     i++;
//     j--;
// }
// console.log(nums);


