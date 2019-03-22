var A = [-4,-1,0,3,10];
A = A.map(num => Math.pow(num,2)).sort((a,b) => a-b);
console.log(A);