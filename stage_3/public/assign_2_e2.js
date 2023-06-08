"use strict";
let numb = [3, 2, 4];
let targ = 6;
for (let i = 0; i < numb.length; i++) {
    //here we find complement
    let complement = targ - numb[i];
    for (let j = i + 1; j < numb.length; j++) {
        // compliment is match to num[j] then we get the target
        if (numb[j] === complement) {
            // console.log(complement);
            // console.log(numb[j]);
            console.log([i, j]);
            break;
        }
    }
}
