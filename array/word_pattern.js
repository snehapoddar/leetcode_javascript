const str = "dog cat cat fish";
const pattern = "abba";

var wordPattern = function(pattern, str) {
    const wordArr = str.split(" ");
    if(wordArr.length != pattern.length) return false;
    let patternMap = new Map();
    let wordMap = new Map();
    let resultPattern = "";
    for(let i =0; i<wordArr.length; i++) {
        let char = pattern.charAt(i);
        let word = wordArr[i];
        if(!wordMap.get(word) && !patternMap.get(char)) {
            wordMap.set(word, char);
            patternMap.set(char, word);
        }
        resultPattern += wordMap.get(word);
    }
    return resultPattern === pattern;
};

console.groupCollapsed(wordPattern(pattern,str))