var a = [1,2,3];
for(var j=0; j<a.length; j++){
    var isSorted = true;
    for(var i=0; i<a.length-1-j; i++){
        if(a[i]>a[i+1]){
            var temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
            isSorted = false;
        }
    }
    // if array is already sorted then time complexity becomes n as inner loop doesnt get executed again
    if(isSorted){
        break;
    }
}

console.log(a, iterations);