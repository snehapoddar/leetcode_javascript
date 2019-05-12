const arr = [9,-3,6,6];



var canThreePartsEqualSum = function(A) {
    if(A.length<3) return false;
    let sum = 0;
    for(const a of A) {
        sum = sum + a;
    }
    if(sum%3!=0) return false;
    let newSum =0;
    for(const a of A) {
        newSum += a;
        if(newSum === sum/3){
            newSum=0;
        }
    }
    return newSum === 0;
};

console.log(canThreePartsEqualSum(arr));