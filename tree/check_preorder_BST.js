var preorder = [1,3,2];
var min = Math.min(...preorder);
var rootIndex = preorder.indexOf(min);
function check(){
    var i = 0;
    while(i<rootIndex){
        if(preorder[i]<preorder[i+1]) {
            return false;
        } 
        i++;
    }
    var j = preorder.length-1;
    while(j>rootIndex){
        if(preorder[j-1]>preorder[j]) {
            return false;
        } 
        j--;
    }
    return true;
}
console.log(check());
