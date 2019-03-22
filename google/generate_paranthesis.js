var n = 3;
var result = [];
function generate(str, open, close){
    console.log(str, open, close);
    if(open===n && close ===n){
        result.push(str);
    }
    if(open<n){
        generate(str+"(", open+1, close);
    }
    if(close<open){
        generate(str+")", open, close+1);
    }
}
generate("", 0, 0);
console.log(result);