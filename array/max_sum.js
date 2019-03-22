var nums = [1,2,3,4,5,6];
var sum = nums[0];
var max = nums[0];
for(let i =1; i< nums.length; i++){
    if(sum<0){
        sum = nums[i];
    } else {
        sum += nums[i];
    }
    if(max<sum){
        max = sum;
    }
}
console.log(max);