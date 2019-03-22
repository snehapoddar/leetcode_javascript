var nums = [-1, 2, 3, 4, 5, 6];
let res = -Number.MAX_VALUE;
let min = 1;
let max = 1;
for (let num of nums) {
    [min, max] = [
        Math.min(num, min * num, max * num),
        Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
}
console.log(res);