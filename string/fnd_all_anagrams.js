var s= "abab", p= "ab";
var psorted = p.split("").sort().join("");
var anagrams = [];
var result = [];
var i = 0; 
while(i<=s.length-p.length) {
    var substring = s.slice(i,i+p.length);
    if(isAnagram(substring)){
        result.push(i); 
    }
    i++;
}

function isAnagram(substring){
    return substring.split("").sort().join("") === psorted;
}
console.log(result);