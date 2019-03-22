var A = [[1,1,0],[1,0,1],[1,0,0]];
var result = [];
A = A.map(a => {
    a = a.reverse();
    a = a.map(ele => ele^1);
    return a
});
console.log(A);
// for(var i=0; i<A.length; i++) {
//     var arr = [];
//     for(var j=0; j<A[i].length; j++){
//         var element = A[i][j] == 1 ? 0 : 1;
//         arr.unshift(element);
//     }
//     result.push(arr);
// }
// console.log(result);