var nums = [3, 3];
function getAllPer(nums){
    var result = [];
    var resultStrings = [];
    if(nums.length == 1){
        result.push([nums[0]]);
        resultStrings.push(nums[0].toString());
        return result;
    }
    for(var i=0; i< nums.length; i++){
        var selectedNumArray = [nums[i]];
        var leftNums = nums.slice(0,i).concat(nums.slice(i+1, nums.length));
        var leftNumsPer = getAllPer(leftNums);
        for(var j=0; j<leftNumsPer.length; j++){
            var permutatesdArr = selectedNumArray.concat(leftNumsPer[j]);
            if(!resultStrings.includes(permutatesdArr.toString())) {
                result.push(permutatesdArr);
                resultStrings.push(permutatesdArr.toString());
            }
        }
    }
    console.log(resultStrings);
    return result;
}
console.log(getAllPer(nums));
