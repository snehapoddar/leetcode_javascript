var S = "(()()(()))";
var removeOuterParentheses = function(S) {
    let res = []; //string buffer
    let open = 0;
    let close =0;
    let tmpStr = '';
    for(const c of S){
        if(c ==='('){
            ++open
        } else if(c ===')'){
            ++close;
        }
        tmpStr +=c;
        if(open === close){
            res.push(tmpStr.slice(1, tmpStr.length-1));
            tmpStr='';
        }
        
    }
    return res.join('');
};

console.log(removeOuterParentheses(S));