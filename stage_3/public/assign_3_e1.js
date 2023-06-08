"use strict";
function searchInsert(nums, targets) {
    let left_ind = 0;
    let right_ind = nums.length - 1;
    while (right_ind >= left_ind) {
        //Find the mid
        const mid = Math.floor((left_ind + right_ind) / 2);
        //Compare mid value with targets if maatch then return mid
        if (nums[mid] === targets) {
            return mid;
        }
        // We are creating boundary of array 
        else if (nums[mid] > targets) {
            right_ind = mid - 1;
        }
        else {
            left_ind = mid + 1;
        }
    }
    return left_ind;
}
const nums = [1, 3, 5, 6];
const targets = 5;
const index = searchInsert(nums, targets);
console.log(index); // Output: 2
