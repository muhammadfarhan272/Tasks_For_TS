function searchInsert(nums:number[], targets:number):number {
    let left_ind:number = 0;
    let right_ind:number = nums.length - 1;

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
const nums:number[] = [1, 3, 5, 6];
const targets:number = 5;
const index:number = searchInsert(nums, targets);
console.log(index); // Output: 2
