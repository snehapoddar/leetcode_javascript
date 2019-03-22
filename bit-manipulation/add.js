var a = 4;
var b = 5;
while(true) {
    let sum = a^b;
    console.log(sum);
    console.log(a&b);
    //console.log()
    let carry = (a&b)<<1;
    if(b == 0) {
        break;
    }
    a=sum;
    b=carry;
}
console.log(a);