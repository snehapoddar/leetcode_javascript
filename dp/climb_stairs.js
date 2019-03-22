var n = 3;
var arr = new Array(n+1).fill(1);
for(var i =2; i<arr.length; i++) {
    arr[i] = arr[i-1] + arr[i-2];
}

for(var i =3; i<arr.length; i++){
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}

console.log(arr, arr[n]);