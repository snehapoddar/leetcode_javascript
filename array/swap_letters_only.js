var S = "7_28]";
S = S.split("");
console.log(S);
var i = 0;
var j = S.length - 1;
while (i < j) {
    if (!isLetter(S[i])) {
        i++;
    }
    if (!isLetter(S[j])) {
        j--;
    }
    var temp = S[i];
    S[i] = S[j];
    S[j] = temp;
    i++;
    j--;
}
console.log(S);
console.log(S.join(""))


function isLetter(char) {
    var digits = "0123456789";
    return char.toLowerCase() != char.toUpperCase() || digits.includes(char);
}