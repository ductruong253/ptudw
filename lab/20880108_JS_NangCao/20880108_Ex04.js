'use strict'

function slowRandom(min, max) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() * (max - min) + min);
        }, 1000)
    });
}

module.exports = slowRandom;