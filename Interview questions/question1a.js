
var deliveryCost = [];
   var deliveryCostMap = new Map();
    for(var i =0; i<numDestinations;i++){
        var sqr = Math.pow(allLocations[i][0], 2) + Math.pow(allLocations[i][1], 2)
        deliveryCost[i] = Math.sqrt(sqr);
        deliveryCostMap.set(Math.sqrt(sqr), allLocations[i]);
    }
    deliveryCost = deliveryCost.sort((a,b) => a-b);
    var result = [];
    for(i=0;i<numDeliveries;i++){
        result.push(deliveryCostMap.get(deliveryCost[i]));
    }
    return result