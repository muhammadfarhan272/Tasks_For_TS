"use strict";
let Num = [3, 3];
let Targ = 6;
for (let i = 0; i < Num.length; i++) {
    //here we find complement
    let complement = Targ - Num[i];
    for (let j = i + 1; j < Num.length; j++) {
        // compliment is match to num[j] then we get the target
        if (Num[j] === complement) {
            // console.log(complement);
            // console.log(Num[j]);
            console.log([i, j]);
            break;
        }
    }
}
