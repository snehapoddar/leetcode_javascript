var s1 = "dinitrophenylhydrazine";
function getPer(s1){
    var result = [];
    if(s1.length == 1){
        result.push(s1);
        return result;
    }
    for(var i =0 ; i< s1.length; i++){
        var charSelected = s1.charAt(i);
        var leftChars = s1.slice(0, i) + s1.slice(i+1, s1.length);
        var innerPre = getPer(leftChars);
        for(var j =0; j< innerPre.length ; j++){
            result.push(charSelected+innerPre[j]);
        }
    }
    return result;
}

var permutations = getPer(s1);
console.log(permutations)
var s2 = 'acetylphenylhydrazine';
function getP(permutations, s2){
    permutations.forEach(element => {
        console.log(element);
        console.log(s2.includes(element));
        if(s2.includes(element)){
          return true;
        }
    });
    return false;
}
console.log(getP(permutations, s2));