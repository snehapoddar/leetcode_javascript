var str = "sneha";
var arr = [...str];
console.log(arr);
for(var i = str.length ; i<0; i--) {
    console.log(arr[i]);
    arr.unshift(arr[i]);
}
console.log(arr);