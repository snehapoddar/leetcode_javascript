// divide in K length groups - 1st group can be between 1 to k
// each group should have a dash
// convert lowercase to uppercase

var S = "2-5g-3-J", K = 2;
S = S.split("-").join("").toUpperCase();

var i = S.length%K === 0 ? K :  S.length%K;
var result = S.substr(0, i);

while(i<S.length){
    result+= '-' + S.substr(i, K);
    i += K;
}
console.log(result);