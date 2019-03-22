var arr = [1, 2, 3, 4];
var newArr = [];;
for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    newArr.push(arr[i]);
    if (arr.length - i > 0) {
        newArr.push(arr[arr.length - 1 - i]);
    }
}
console.log(newArr);