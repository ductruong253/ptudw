'use strict';
const average = (arr) => {
    let sum = 0;
    if (arr) {
        let size = arr.length;
        for (let i = 0; i < size; i++) {
            sum += arr[i];
        }
        return sum / size;
    }
    return 0;
}

const showAverage = (arr) => {
    console.log('The average of ');
    if (arr){
        for (const item of arr){
            console.log(item);
        }
        console.log(`is: ${average(arr)}`)
    } else {
        console.log('empty array is 0!')
    }
}

console.log(showAverage([0]));
console.log(showAverage([1, 2, 3]));
console.log(showAverage([1, 2, 3, 4]));
console.log(showAverage([1, 4, 4, 4, 1]));
console.log(showAverage([-12, -13, 512, 1337]));
console.log(showAverage());