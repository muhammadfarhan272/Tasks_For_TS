"use strict";
function sortColors(nums) {
    let l = 0; // Represents the boundary for red (0)
    let m = 0; // Represents the boundary for white (1)
    let h = nums.length - 1; // Represents the boundary for blue (2)
    while (h >= m) {
        if (nums[m] === 0) {
            // Swap current element with the element at the low boundary
            [nums[l], nums[m]] = [nums[m], nums[l]];
            l++;
            m++;
        }
        else if (nums[m] === 1) {
            // Move to the next element (White)
            m++;
        }
        else if (nums[m] === 2) {
            [nums[m], nums[h]] = [nums[h], nums[m]];
            h--;
        }
    }
}
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]
