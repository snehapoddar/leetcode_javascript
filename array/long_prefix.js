var strs = ["abab","aba",""];

var str1 = strs[0];

for (var i = 0; i < str1.length; i++) {
    console.log(strs.find(str => str[i] == str1[i]));
    if(!strs.find(str => str[i] != str1[i])) {
        break;
    }
}
console.log(i);
