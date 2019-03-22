var string = 'abcc';
function getAllPermutations(str){
    var result =[];
    if(str.length == 1){
        result.push(str);
    }
    for(var i =0; i< str.length; i++){
        var selectedChar = str.charAt(i);
        var strWithoutSelectedChar = str.substring(0,i) + str.substring(i+1, str.length);
        var permutations_strWithoutSelectedChar = getAllPermutations(strWithoutSelectedChar);
        for(var j =0; j<permutations_strWithoutSelectedChar.length; j++){
            var permutation = selectedChar+permutations_strWithoutSelectedChar[j];
            if(result.indexOf(permutation) < 0){
                result.push(permutation);
            }
        }
    }
    return result;
}
console.log(getAllPermutations(string));