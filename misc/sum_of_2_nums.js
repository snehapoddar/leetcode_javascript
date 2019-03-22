var a = 66;
var b = 91;
while (true) {
    let sum = a ^ b;
    console.log(sum);
    let carry = (a & b) << 1;
    if (b == 0) {
        console.log(a);
        break;
    }
    a = sum;
    b = carry;
}