'use strict'

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function test(min, max) {
    await delay(1000);
    return Math.random() * (max - min) + min;
}

let rand = test(1, 4);
console.log(rand);