var moves = "UD";
var x = 0;
var y = 0;
for(var i =0; i<moves.length; i++){
    if(moves.charAt(i) == 'U'){
        y+=1;
    }
    else if(moves.charAt(i) == 'D'){
        y-=1;
    }
    else if(moves.charAt(i) == 'L'){
        x-=1;
    }
    else if(moves.charAt(i) == 'R'){
        x+=1;
    }
}
if(x==0 && y==0){
    console.log(true);
} else {
    console.log(false);
}
