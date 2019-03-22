var grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
var count = 0;
for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === '1') {
            count+= dfs(grid, i, j);
        }
    }
}

function dfs(grid, r, c){
    if(r<0 || r>grid.length-1 || c<0 || c>grid[r].length-1 || grid[r][c] == 0){
        return 0;
    }
    grid[r][j] = 0;
    dfs(grid, r-1, j);
    dfs(grid, r+1, j); 
    dfs(grid, r, j-1);
    dfs(grid, r, j+1);
    return 1;
}
console.log(islandArr);