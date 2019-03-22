var matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
var target = 7;

var rowIndex = getRowIndex();
if(rowIndex<0){
    console.log(false);
}
if(matrix[rowIndex].indexOf(target) == -1){
    console.log(false);
}

console.log(true);
function getRowIndex() {
    for( var i = 0 ; i< matrix.length; i++){
        if(matrix[i][matrix[i].length-1] >= target && matrix[i][0] <= target){
            return i;
        }
    }
    return -1;
}