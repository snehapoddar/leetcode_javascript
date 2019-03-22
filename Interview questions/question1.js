var numDestinations =4;
var allLocations = [[-1, -1], [1, 1], [1,-1], [0,0]];
var numDeliveries =2;
var deliveryCost = [];
var deliveryCostMap = new Map();
for(var i =0; i<numDestinations;i++){
    var sqr = Math.pow(allLocations[i][0], 2) + Math.pow(allLocations[i][1], 2)
    deliveryCost[i] = Math.sqrt(sqr);
    if(!deliveryCostMap.get(Math.sqrt(sqr))){
        deliveryCostMap.set(Math.sqrt(sqr), [allLocations[i]]);
    } else {
        deliveryCostMap.get(Math.sqrt(sqr)).push(allLocations[i]);
    }
}
deliveryCost = deliveryCost.sort((a,b) => a-b);
var result = [];
for(i=0;i<numDeliveries;i++){
    var arr = deliveryCostMap.get(deliveryCost[i]);
    result = result.concat(arr);
}
console.log(result);
console.log(result.slice(0, numDeliveries));