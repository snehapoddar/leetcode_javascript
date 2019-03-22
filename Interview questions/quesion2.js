var foregroundAppList = [[1,2], [2,4], [3, 6],[4,4]];
var backgroundAppList = [];
var deviceCapacity = 7;
if(foregroundAppList.length === 0 || backgroundAppList.length === 0) console.log([[]]);
var pairMap = new Map();
for(var i =0; i<foregroundAppList.length; i++) {
    for(var j = 0; j<backgroundAppList.length; j++) {
        var sum = foregroundAppList[i][1] + backgroundAppList[j][1];
        var combination = [];
        combination.push(foregroundAppList[i][0]);
        combination.push(backgroundAppList[j][0]);
        if(!pairMap.get(sum)) {
            pairMap.set(sum, [combination]);
        } else {
            pairMap.get(sum).push(combination);
        }
    }
}
console.log(pairMap);
var max = 0;
pairMap.forEach((value, key) => {
    if(key <= deviceCapacity && key>max){
       max = key;
    }
});
var result = pairMap.get(max) ? pairMap.get(max): [[]];
console.log(result);