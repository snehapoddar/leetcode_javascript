var height= [2,0,2];
var count = 0;
for(var i = 0; i<height.length; i++){
    var leftArr = height.slice(0, i);
    var rightArr = height.slice(i+1, height.length);
    var waterAtIndex = Math.min(Math.max(...leftArr), Math.max(...rightArr)) - height[i];
    console.log(i,waterAtIndex);
    if(waterAtIndex>0){
        count+=waterAtIndex;
    }
}
console.log(count);