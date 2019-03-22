var arr = [2,7,4,1,5,3,1];
for(var i=1; i<arr.length;i++){
    var temp = arr[i];
    var holeIndex = i
    while(holeIndex>0 && arr[holeIndex-1]>temp) {
        arr[holeIndex] = arr[holeIndex-1]
        holeIndex --;
    }
    arr[holeIndex] = temp;
}
console.log(arr);