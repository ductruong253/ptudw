'use strict'

async function slowRandom(min, max) {
    let rand;
    let timer;
    do {
        handleTimeout1().then(data => console.log('data', data));
        clearTimeout(timer);
    } while (max * rand <= min)
    return max * rand;
}

let handleTimeout = async () => {
    let number;
    return await setTimeout(() => {
        number = Math.random();
    }, 1000);
}

let handleTimeout1 = () => {
    let number = 0;
    return new Promise((resolve) => {
        setTimeout(()=> {
            number = Math.random();
            resolve();
        }, 1000)
        return number;
    })
}


module.exports = slowRandom;