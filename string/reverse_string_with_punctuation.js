const s = "the sky, is blue.";

var reverseWords = function(s) {
    let punc = [".", ",", "!", "?"];
    let words = s.split(/[.,'!?]/).join("").split(" ");
    let reverseWords = words.reverse();
    let wordWithPunc = s.split(" ");
    let result = "";
    for(let i=0; i<wordWithPunc.length; i++){
        result += reverseWords[i];
        let wordLastChar = wordWithPunc[i].charAt(wordWithPunc[i].length-1);
        if(punc.includes(wordLastChar)) {
            result += wordLastChar;
        }
        result += " ";
    }
    return result.trim();
};

console.log(reverseWords(s));