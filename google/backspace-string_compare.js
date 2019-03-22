var S = "y#fo##f",
    T = "y#f#o##f";

function clean(str) {
    while(str.includes('#')) {
        if(str.indexOf("#") === 0) {
            str = str.slice(1, str.length);
        } else {
            var i = str.indexOf("#");
            str = str.slice(0, i - 1) + str.slice(i + 1, str.length);
        }
    }
    return str;
}


console.log(clean(S), clean(T));