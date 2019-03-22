var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
var target = 5;
function get() {
    var r = 0;
    var c = matrix[0].length - 1;
    while (r < matrix.length && c > -1) {
        if (matrix[r][c] < target) r++;
        if (matrix[r][c] > target) c--;
        if (matrix[r][c] == target) return true;
    }
    return false;
}
console.log(get());