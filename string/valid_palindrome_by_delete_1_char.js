var s = 'abca';
var flag = false;
for(var i = 0; i< s.length; i++){
    var newStr = s.slice(0,i) + s.slice(i+1, s.length);
    var revNewStr = newStr.split('').reverse().join('');
    if(newStr === revNewStr){
        flag = true;
        break;
    }
}
console.log(flag);