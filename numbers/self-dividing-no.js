var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i =left; i<=right; i++){
        if(isSelfDividing(i)) result.push(i);
    }
    return result;
};

function isSelfDividing(num){
    let digits = getNumDigits(num);
    for(let digit of digits){
        if(digit === 0 || num%digit != 0){
            return false;
        }
    }
    return true;
}

function getNumDigits(num){
    let digits = [];
    while(num>9){
        digits.push(num%10);
        num = Math.floor(num/10);
    }
    digits.push(num);
    return digits;
}

console.log(isSelfDividing(22));