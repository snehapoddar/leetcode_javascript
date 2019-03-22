const rec1 = [-2,-2, 2,2], rec2 = [3,3,4,4];

function getOverLapWidth(rec1, rec2){
    return Math.min(rec1[2], rec2[2]) - Math.max(rec1[0], rec2[0]);
}

function getOverLapHieght(rec1, rec2){
    return Math.min(rec1[3], rec2[3]) - Math.max(rec1[1], rec2[1]);
}

const overLapArea = getOverLapWidth(rec1, rec2) * getOverLapHieght(rec1, rec2);
const rec1Area = (rec1[3]-rec1[1])*(rec1[2]-rec1[0]);
const rec2Area = (rec2[3]-rec2[1])*(rec2[2]-rec2[0]);

console.log(rec1Area+rec2Area-overLapArea);