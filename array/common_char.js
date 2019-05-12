const A = ["bella","label","roller"];

var commonChars = function(A) {
    let result = [];
    if(A.length) {
        const word = A[0];
        for(let char of word){
            let flag = true;
            for(let i=1; i<A.length;i++) {
                if(!A[i].includes(char)) {
                    flag = false;
                } else {
                    A[i] = getSlicedWord(A[i], char);
                }
                if(!flag) break;
            }
            if(flag) result.push(char);
        }
    }
    return result;
}

function getSlicedWord(word, char) {
    const index = word.indexOf(char);
    return word.slice(0, index) + word.slice(index+1, word.length);
}



// var commonChars = function(A) {
//     let result = [];
//     if(A.length) {
//         const word = A[0];
//         let map = new Map();
//         for(let char of word){
//             let flag = true;
//             for(let i=1; i<A.length;i++) {
//                 let indexArr = [];
//                 if(A[i].includes(char)) {
//                     if(map.get(i)) {
//                         indexArr = map.get(i);
//                     }
//                     if(indexArr.includes(A[i].indexOf(char))){
//                         flag = false;
//                     } else {
//                         indexArr.push(A[i].indexOf(char));
//                     }
//                     map.set(i, indexArr);    
//                 } else {
//                     flag = false;
//                 }
//                 if(!flag) break;
//             }
//             if(flag) {
//                 result.push(char);
//             }
//         }
//     }
//     return result;
// };

// function findIfCharIsDuplicate(){

// }

console.log(commonChars(A));