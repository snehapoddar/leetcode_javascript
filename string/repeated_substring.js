var s = "babbabbabbabbab";
function check(s) {
    for(var i = 0; i<s.length; i++){
        var substring = s.substr(0, i+1);
        var repeatTimes = Math.ceil(s.length/substring.length);
        if(repeatTimes>1 && substring.repeat(repeatTimes) === s) {
            return true;
        }
    }
    return false;
}


console.log(check(s));