var S = 'ab-cd';

function isLetter(char){
    return char.toLowerCase() != char.toUpperCase();
}

var letters = [];
for(var i = 0; i<S.length; i++){
    var c = S.charAt(i);
    if(isLetter(c)) {
        letters.unshift(c);
    }
}
console.log(letters);
var j = 0;
var result = '';
for(var i = 0; i<S.length; i++){
    var c = S.charAt(i);
    if(isLetter(c)) {
        result += letters[j];
        j++;
    } else {
        result += c;
    }
}
console.log(result);

