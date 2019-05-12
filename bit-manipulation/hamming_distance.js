var hammingDistance = function (x, y) {
    let str = (x ^ y).toString(2);
    return str.lastIndexOf('1') - str.indexOf('1');
};
console.log(hammingDistance(1, 3))