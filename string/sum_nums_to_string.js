var num1 = '99';
var num2 = '9';
var result = [];
var i = num1.length-1;
var j = num2.length-1;
var carry = 0;
while(i>-1 || j>-1) {
    var n1 = i>-1 ? parseInt(num1.charAt(i)) : 0;
    var n2 = j>-1 ? parseInt(num2.charAt(j)) : 0;
    var sum =  n1+ n2 + carry;
    if(sum>9){
        carry = 1;
        sum = sum-10;
    } else {
        carry = 0;
    }
    result.unshift(sum);
    i--;
    j--;
}
if(carry){
    result.unshift(carry);
}
console.log(result.toString().split(",").join(""));