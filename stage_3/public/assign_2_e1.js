"use strict";
debugger;
let num = [2, 7, 12, 15];
let target = 9;
for (let i = 0; i < num.length; i++) {
    //here we find complement
    let complement = target - num[i];
    for (let j = i + 1; j < num.length; j++) {
        // compliment is match to num[j] then we get the target
        if (num[j] === complement) {
            // console.log(complement);
            // console.log(num[j]);
            console.log([i, j]);
            break;
        }
    }
}
