function Interval(start, end) {
    this.start = start;
    this.end = end;
}
[[9,16],[6,16],[1,9],[3,15]]
const intervals = [
    new Interval(0, 30), 
    new Interval(5, 15),
    new Interval(15, 20),
    new Interval(3, 13),
];

let startArr = intervals.concat().sort((x, y) => {
    return x.start - y.start;
})

let endArr = intervals.sort((x, y) => {
    return x.end - y.end;   
})
console.log(startArr, endArr);
let rooms = 0;
let end = 0;
for(let i = 0; i < intervals.length; i ++){
    if(startArr[i].start < endArr[end].end){
        rooms ++;
    }
    else end ++;
}
console.log(rooms);