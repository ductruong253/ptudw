'use strict';
const getLargest = (a, b, c) => {
    let ar = [a,b,c];
    ar.sort((x1,x2) => (x2 - x1));
    return ar[0];
}

console.log(getLargest(2, 3, 4));
console.log(getLargest(4, 3, 3));
console.log(getLargest(3, 4, 2));
console.log(getLargest(3, 2, 4));
console.log(getLargest(17, 1, 8));
console.log(getLargest(5, 5, 9));
console.log(getLargest(1, 22, 3));
console.log(getLargest(88, 87, 86));
console.log(getLargest(4, 2, 3));