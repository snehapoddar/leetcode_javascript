var prices = [7,6,4];
var buy, sell, maxprofit = 0;
for(var i=0; i<prices.length-1; i++){
    buy = prices[i];
    for(var j=i+1; j<prices.length; j++) {
        if(prices[i]<prices[j]) {
            sell = prices[j];
            if(maxprofit<sell-buy){
                maxprofit = sell-buy;
            }
        }   
    }
}
console.log(maxprofit);