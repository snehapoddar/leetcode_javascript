var a = "asghghjkabcx";
var b = "abcdefs";
function findOverLap(a,b){
    if(!a.length || !b.length) return "";
    if(a.indexOf(b) > -1){
        return b;
    }
    if(b.indexOf(a) > -1){
        return a;
    }
    return findOverLap(a, b.substring(0, b.length-1));
}
console.log(findOverLap(a,b));