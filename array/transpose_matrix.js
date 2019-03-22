var A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var transpose = [];
for (var c = 0; c < A[0].length; c++) {
    var arr = [];
    for (var r = 0; r < A.length; r++) {
        arr.push(A[r][c]);
       
    }
    transpose.push(arr);
}

