"use strict";
let arrNumb = [3, 8, 5, 99, 6, 24, 98, 66];
var maxNumb = arrNumb[0];
for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] > maxNumb) {
        maxNumb = arrNumb[i]; //Update maxNumber
    }
}
console.log(maxNumb + " " + arrNumb.indexOf(maxNumb));
