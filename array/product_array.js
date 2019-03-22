var nums = [1,2,3,4];
var prods=[];
var prodI = 1;
for(var i=0; i<nums.length;i++){
    prods[i] = prodI;
    prodI *= nums[i];
}
console.log(prods);
var prodI = 1;
for(var i=nums.length-1;i>=0; i--){
    prods[i] = prodI*prods[i];
    prodI *= nums[i];
}
console.log(prods);


// Solution 2 
var nums = [1,2,3,4];
var result = [];
for(var i=0; i<nums.length;i++) {
    var product = 1;
    for(var j=0; j<nums.length;j++){
        product *= i===j ? 1 : nums[j];
    }
    result.push(product);
}
console.log(result);