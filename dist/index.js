"use strict";
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num *= factorial(num - 1);
    }
}
let numero = 5;
console.log(factorial(numero));
