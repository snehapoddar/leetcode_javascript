var grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];
var perimeter = 0;
for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[0].length; c++) {
        if(grid[r][c] === 1){
            perimeter += countP(grid, r, c);
        }
    }
}

function countP(grid, r , c){
    var count = 0;
    if(r-1<0 || grid[r-1][c] === 0) count++;
    if(r+1>grid.length-1 || grid[r+1][c] === 0) count++;
    if(c-1<0 || grid[r][c-1] === 0) count++;
    if(c+1>grid[0].length-1 || grid[r][c+1] === 0) count++;
    return count;
}
console.log(perimeter);