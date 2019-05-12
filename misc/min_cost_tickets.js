const days = [1,2,3,4,5,6,7,8,9,10,30,31];
const costs = [2,7,15];

var mincostTickets = function(days, costs) {
    const len = days.length;
    for(let i =len; i>=0; i--){
        if(days[i]>30){
            div = Math.floor(days[len-1]/30);
        } 
    }
    let div, rem, total;
    if(days[len-1]>30){
        div = Math.floor(days[len-1]/30);
    }
    let nextIndex = 30*div;
};