const s = "the sky  is  blue";

var reverseWords = function(s) {
    let arr = s.split(" ");
    let words = [];

    arr.forEach(element => {
        if(element != "")
        words.push(element);
    });
    console.log(arr, words);
    words = words.reverse();
    let result = "";
    words.forEach(element => {
        result = result + element + " ";
    });
    return result.trim();
};

console.log(reverseWords(s));