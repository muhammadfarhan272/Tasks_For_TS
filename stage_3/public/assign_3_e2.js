"use strict";
function seInsert(numsArr, targe) {
    let left_ind = 0;
    let right_ind = numsArr.length - 1;
    while (right_ind >= left_ind) {
        //Find the mid
        const mid = Math.floor((left_ind + right_ind) / 2);
        //Compare mid value with targe if maatch then return mid
        if (numsArr[mid] === targe) {
            return mid;
        }
        // We are creating boundary of array 
        else if (numsArr[mid] > targe) {
            right_ind = mid - 1;
        }
        else {
            left_ind = mid + 1;
        }
    }
    return left_ind;
}
const numsArr = [1, 3, 5, 6];
const targe = 2;
const ind = seInsert(numsArr, targe);
console.log(ind); // Output: 1
