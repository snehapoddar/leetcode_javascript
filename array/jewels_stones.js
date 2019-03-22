var J = "aA", S = "aAAbbbb";
var count = 0;
for(var i =0; i<S.length; i++){
    if([...J].includes(S.charAt(i))){
        count++;
    }
}
console.log(count);
