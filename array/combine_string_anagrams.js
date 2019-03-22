const arr = [ "cat", "tac", "pot", "top", "meow", "act" ];

const map = new Map();
let  results = []; 
for(let i =0; i< arr.length; i++){
    const str = arr[i].split("").sort().join("");
    let res = [];
    if(map.has(str)){
        res = map.get(str);
    }
    res.push(arr[i]);
    map.set(str, res)
}
console.log([...map.values()]);