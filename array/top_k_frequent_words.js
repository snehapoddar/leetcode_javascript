var words= ["i", "love", "leetcode", "i", "love", "coding"];
var k = 2;
var map = new Map();
words.forEach(word => {
    if(map.get(word)){
       map.set(word, map.get(word) + 1);
    } else {
        map.set(word, 1);
    }
});

var sorted = [...map].sort((a, b) => {
    console.log(a,b);
    if(a[1] < b[1]){
        return 1;
    }
    if(a[1]> b[1]){
        return -1;
    } 
    if(a[1] == b[1]){
        if(a[0]<b[0]){
           return -1;
        } else {
            return 1;
        } 
    }
    return 0;
});
var result = [];
for(var i =0; i<k;i++){
    result.push(sorted[i][0]);
}
