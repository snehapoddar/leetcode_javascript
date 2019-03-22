var nums = [10,9,2,5,3,7,101,18,104];
if (nums.length == 0) {
    return 0;
}
if (nums.length == 1) {
    return 1;
}

var arr = new Array(nums.length).fill(1);
for (var i = 1; i < nums.length; i++) {
    for(var j = 0; j < i; j++) {
        if(nums[j]<nums[i]){
            arr[i]= Math.max(arr[i], arr[j]+1);
        }
    }
}
console.log(arr, Math.max(...arr));