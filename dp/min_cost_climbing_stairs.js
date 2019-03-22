var cost = [0,1,2,2,0];
// cost.push(0);
var dp = new Array(cost.length).fill(0);
dp[0] = cost[0];
dp[1] = cost[1];
for(var i =2; i<dp.length; i++){
    dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
}
return Math.min(dp[i-1], dp[i-2]);