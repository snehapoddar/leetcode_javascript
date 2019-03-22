function gcd(a, b) 
{ 
    if (a == 0) 
        return b; 
    return gcd(b % a, a); 
} 

var num = 5;
var arr = [2,4,6,8,10];
var result = arr[0];
for(var i = 1; i < num; i++){
    result = gcd(result, arr[i]);
}
console.log(result);