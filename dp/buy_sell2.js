var prices = [1,2,3,4,5];
var buy, sell, profit = 0;
var i =0;

while(i<prices.length-1){
    buy = prices[i];
    for(var j=i+1; j<prices.length; j++) {
        if(prices[i]<prices[j]) {
            if(sell<prices[j]) {
                sell = prices[j];
                profit += sell-buy;
                i=j;
                break;
            }
        }   
    }
    i++;
}
console.log(profit);