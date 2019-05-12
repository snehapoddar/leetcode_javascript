const A = [3,2,1,2,3,3];
var repeatedNTimes = function(A) {
    return A.find((a, index, array) => {
        console.log(a, index, array);;
        return array.indexOf(a) !== index;
    })
};
console.log(repeatedNTimes(A));