var s = "babad";
var middle = s.length
console.log(s.slice(0, s.length/2))
var longestS = "";
var i = 0;
var iterations = 0;
while (i < s.length) {
    var j = s.length;
    while (j > i && longestS.length < j - i) {
        iterations++;
        var substring = s.slice(i, j);
        var rev = substring.split("").reverse().join("");
        if (substring === rev && substring.length > longestS.length) {
            longestS = substring;
            break;
        }
        j--;
    }
    i++;
}
console.log(longestS, iterations);
// var substring = "";
// for(var i =0; i<s.length-1; i++) {
//     substring = s.charAt(i);
//     for(var j = i+1; j<s.length; j++){
//         substring += s.charAt(j);
//         var rev = substring.split("").reverse().join("");
//         if(substring === rev && substring.length > longestS.length){
//             longestS = substring;
//         }
//     }
//     if(longestS.length<1){
//         longestS = s.charAt(i);
//     }
// }
// console.log('string:' + longestS);