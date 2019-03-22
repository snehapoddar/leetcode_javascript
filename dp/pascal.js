var n = 6;
var a = [];
for(var i=0; i<n; i++){
    var b = new Array(i+1).fill(1);
    for(var j=1; j<i; j++){
        b[j] = a[i-1][j-1] + a[i-1][j];
    }
    a.push(b);
}
console.log(a);
