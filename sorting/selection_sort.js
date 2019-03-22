var arr = [2,7,4,1,5,3,1];
for(var i =0; i< arr.length-2;i++){
    var min = Math.min(...arr.slice(i, arr.length));
    var minIndex = arr.lastIndexOf(min);
    var temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
}
console.log(arr);