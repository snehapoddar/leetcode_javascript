var num = 1000000;
var count = 0;
function getMinCount(num, count) {
    if (num < 2) return count;
    if (num%3 === 0) return getMinCount(num/3, count + 1);
    if ((num-1)%3 === 0) return getMinCount((num-1)/3, count + 2);
    if (num%2 === 0) return getMinCount(num/2, count + 1);
    else return getMinCount(num - 1, count + 1);
}

console.log(getMinCount(num, count));
console.log((100000-1)%3);