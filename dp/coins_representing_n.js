var coins = [1,5,10,25];
var n = 25;
var ways = new Array(n+1).fill(0);
ways[0] = 1;
for( var coin of coins){
    for(var i = coin; i<ways.length; i++){
        ways[i] += ways[i-coin];
    }
}
console.log(ways);
console.log(ways[n]);