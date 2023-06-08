"use strict";
function searchInsert(nums, target) {
    let left_ind = 0;
    let right_ind = nums.length - 1;
    while (right_ind >= left_ind) {
        //Find the mid
        const mid = Math.floor((left_ind + right_ind) / 2);
        //Compare mid value with target if maatch then return mid
        if (nums[mid] === target) {
            return mid;
        }
        // We are creating boundary of array 
        else if (nums[mid] > target) {
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
const index = searchInsert(nums, target);
console.log(index); // Output: 2
