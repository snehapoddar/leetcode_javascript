var paragraph = "a.";
var banned = [];
var paraArr = paragraph.toLowerCase().split(/\W/);
var map = new Map();
var count = 0;
var maxCount = 0;
var result;
paraArr.forEach(word => {
    if(!banned.includes(word) && word.length>0){
        count = map.has(word) ? map.get(word) + 1 : 1;
        
        map.set(word, count);
        if(count>maxCount){
            maxCount = count;
            result = word;
        }
    }
});
console.log(map, maxCount, result);