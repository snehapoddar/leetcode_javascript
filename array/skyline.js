const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];

var maxIncreaseKeepingSkyline = function(grid) {
    let colMax = [];
    let sum = 0;
    for(let c=0; c<grid[0].length; c++){
        let buildingHeightByDirection = [];
        for(let r=0;r<grid.length; r++){
            buildingHeightByDirection.push(grid[r][c]);
        }
        colMax.push(Math.max(...buildingHeightByDirection));
    }
    for(let r=0; r<grid.length; r++){
        let maxRow = Math.max(...grid[r]);
        for(let c=0; c<grid[0].length; c++){
            sum += Math.min(colMax[c], maxRow) - grid[r][c];
        }
    }
    return sum;
};
const a = [1,2,3];
console.log(Math.max(...a));
console.log(maxIncreaseKeepingSkyline(grid))
