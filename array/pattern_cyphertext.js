const words = ["abc","deq","mee","aqq","dkd","ccc"];
const pattern = "abb";

var findAndReplacePattern = function(words, pattern) {
    let result = [];
    let i =0;
    while(i<words.length) {
        const word = words[i];
        if(word.length === pattern.length){
            /* two maps to store 2 way binding c=>a (word=>pattern) & a=>c (pattern=>word) for last word ccc. 
            You can also do in 1 map and try to find if values exits but it will slower anyways you are running loop twice 
            (while interating words and for interating chars in word).
            You dnt want it more slow.
            */
            let patternMap = new Map();
            let wordMap = new Map();
            let newWord = '';
            for(let j =0; j<word.length;j++) {
                const char = word.charAt(j);
                if(!patternMap.get(pattern.charAt(j))&& ! wordMap.get(char)) {
                    patternMap.set(pattern.charAt(j), char);
                    wordMap.set(char, pattern.charAt(j));
                }
                newWord += patternMap.get(pattern.charAt(j));
            }
            if(newWord === word){
                result.push(word);
            }
        }
        i++;
    }
    return result;
};

console.log(findAndReplacePattern(words, pattern))