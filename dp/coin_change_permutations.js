var coins = [1,5,10,25]
var amount = 25;
const ways = new Array(amount + 1).fill(0);
ways[0] = 1;

for (const coin of coins) {
    for (let i = coin; i < ways.length; i++) {
        ways[i] += ways[i - coin];
    }
}
console.log(ways);
console.log(ways[amount]);