// Note: not the right solution still working on it

const date = new Date('01/01/2019');
const givenDate = new Date('01/05/2019');
const days = (givenDate - date)/(1000 * 3600 * 24);

const week1Daysleft = 7-3; // 1st jan is tuesday
const weekNo = Math.ceil(days/7);
const daysLeftInSameWeek = days%7;

if(daysLeftInSameWeek<=week1Daysleft) {
    console.log(weekNo);
} else {
    console.log(weekNo+1);
}
