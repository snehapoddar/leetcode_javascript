var coins = [1, 2, 5];
var amount = 11;
var arr = new Array(amount+1).fill(amount+1);
arr[0] = 0;
for(var i =0; i<arr.length;i++){
    for(coin of coins){
        if(i-coin>=0){
            arr[i] = Math.min(arr[i], 1+arr[i-coin]);
        }
    }
}
console.log(arr);