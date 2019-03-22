var string = 'abc';
function getAllPermutations(str){
    var result =[];
    if(str.length == 1){
        result.push(str);
        return result;
    }
    for(var i =0; i< str.length; i++){
        var selectedChar = str.indexOf(i);
        var strWithoutSelectedChar = str.substring(0,i) + str.substring(i+1, str.length);
        var permutations_strWithoutSelectedChar = getAllPermutations(strWithoutSelectedChar);
        for(var j =0; j<permutations_strWithoutSelectedChar.length; j++){
            result.push(selectedChar+permutations_strWithoutSelectedChar[j]);
        }
    }
    return result;
}
console.log(getAllPermutations(string));