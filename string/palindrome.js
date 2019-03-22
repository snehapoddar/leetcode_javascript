var s = "0P";
s = s.toLowerCase();
var valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
var arr = [...s];
arr = arr.filter(a => {
    if(valid.includes(a)) {
        return a;
    }
});
if(arr.toString() === arr.reverse().toString()){
   console.log(true);
}
console.log(false);
