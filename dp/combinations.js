var nums = [ 1,2,3];
var combinations = [[]];
var combi;
var combinationsLength = Math.pow(2, nums.length);
for (var i = 1; i < combinationsLength ; i++){
    combi= [];
    for (var j=0; j<nums.length;j++) {
        if ((i & Math.pow(2,j))){ 
            combi.push(nums[j]);
        }
    }
    if (combi.length > 0) {
        combinations.push(combi);
    }
}
console.log(combinations);