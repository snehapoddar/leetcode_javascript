var s2 = 'grapo';
var s1 = 'program';
var a1 = [...s1].sort();
var result = '';
var left = '';
for(var i = 0; i<s2.length; i++){
    var c = s2.charAt(i);
    if(a1.includes(c)){
        var repeatTimes = a1.lastIndexOf(c) - a1.indexOf(c) + 1;
        result+= c.repeat(repeatTimes);
        a1 = a1.filter(item => item!=c);
    } else {
        left+=c;
    }
}
console.log(result + a1.toString().split(",").join(""));