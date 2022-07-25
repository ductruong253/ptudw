'use strict';

let fibo_arr = new Array();
//init value for the first 2 elements
fibo_arr[0] = 0;
fibo_arr[1] = 1;
for (let i = 0; i < 30; i++) {
    //start the increament since 3rd element
    if (i > 1) {
        fibo_arr[i] = fibo_arr[i-1] + fibo_arr[i-2];
    }
    //print out the current element value
    console.log(`Fibonacci's number ${i} is: ${fibo_arr[i]}`);
}