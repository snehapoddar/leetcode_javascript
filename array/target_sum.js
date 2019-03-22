var candidates = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 7;
var result = [];
var arr;
for (var i = 0; i < candidates.length - 1; i++) {
    arr = [];
    j = i + 1;
    while (j < candidates.length && candidates[i] + candidates[j] <= target) {
        if (candidates[i] + candidates[j] == target) {
            arr.push(candidates[i]);
            arr.push(candidates[j]);
        }
        j++;
    }
    if (arr.length > 0) {
        result.push(arr);
    }
}
console.log(result);