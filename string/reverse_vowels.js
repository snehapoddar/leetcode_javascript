var s = 'aA';

function isVowel(char){
    var vowels = 'aieou';
    return vowels.indexOf(char.toLowerCase()) != -1;
}

var vowels = [];
for(var i = 0; i<s.length; i++){
    var c = s.charAt(i);
    if(isVowel(c)) {
        vowels.unshift(c);
    }
}

console.log(vowels);
var j = 0;
var result = '';
for(var i = 0; i<s.length; i++){
    var c = s.charAt(i);
    if(isVowel(c)) {
        result += vowels[j];
        j++;
    } else {
        result += c;
    }
}
console.log(result);

