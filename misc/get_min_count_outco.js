var num = 5;
// var count = 0;
// function getMinCount(num, count) {
//     if (num < 2) return count;
//     if (num % 3 === 0) return count + num % 3;
//     if (num % 2 === 0) return count + num % 2;
//     else return getMinCount(num - 1, count + 1);
// }



function getMinCount(num) {
    var table = [0, 0];
    if (num < 2) return table[num];
    var result = table[num-1];
    if (num % 3 === 0)  {
        result = Math.min(result, table[num%3]);
    }
    if (num % 2 === 0 ) {
        result = Math.min(result, table[num%2]);
    }
    table.push(result+1);
    return result+1; 
}

console.log(getMinCount(num));