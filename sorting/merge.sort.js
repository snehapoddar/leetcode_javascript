// Time Complexity = O(nlog(n))
// Space Complexity = O(n)
var arr = [2, 7, 4, 1, 5, 3, 1];

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
console.log(mergeSort(arr));