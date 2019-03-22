var s = 'abaccadeeefaafcc';
var map = new Map();
for(var i=0; i< s.length; i++){
    var char = s.charAt(i);
    if(map.has(char)) {
        map.set(char, map.get(char) + 1);
    } else {
       map.set(char, 1);
    }
}
console.log(map.entries());
var sortedMap = new Map([...map.entries()].sort((a, b) => {
    console.log(b,a);
    return b[1] - a[1];
}
    ));
var newStr = '';
sortedMap.forEach((count, char) => newStr += char.repeat(count));
console.log(newStr);