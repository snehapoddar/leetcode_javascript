var s = "leetcode"
var arr = [...s];
for(var i=0; i<s.length; i++){
    if(s.indexOf(arr[i]) == s.lastIndexOf(arr[i])){
        console.log(i);
    }
}
console.log(-1);