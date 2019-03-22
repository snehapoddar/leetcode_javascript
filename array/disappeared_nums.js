const nums = [4,3,2,7,8,2,3,1];

let disappearedNums = [];
for(let i=1; i<=nums.length; i++){
    if(!nums.includes(i)){
        disappearedNums.push(i);
    }
}
console.log(disappearedNums);