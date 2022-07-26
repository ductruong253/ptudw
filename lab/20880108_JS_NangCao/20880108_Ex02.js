'use strict'

function random(min, max) {
    let rand;
    do {
        rand = Math.random();
    } while (max * rand <= min)
    return rand * max;
}

module.exports = random;