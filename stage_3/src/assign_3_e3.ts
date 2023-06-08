function sInsert(numArr:number[], tar:number):number {
    let left_ind:number = 0;
    let right_ind:number = numArr.length - 1;

    while (right_ind >= left_ind) {
        //Find the mid
        const mid = Math.floor((left_ind + right_ind) / 2);
        //Compare mid value with tar if maatch then return mid
        if (numArr[mid] === tar) {
            return mid;
        }
        // We are creating boundary of array 
        else if (numArr[mid] > tar) {
            right_ind = mid - 1;
        }
        else {
            left_ind = mid + 1;
        }
    }

    return left_ind;
}
const numArr:number[] = [1, 3, 5, 6];
const tar:number = 7;
const inde:number = sInsert(numArr, tar);
console.log(inde); // Output: 4
