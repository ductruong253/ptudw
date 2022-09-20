'use strict'

let students = [
    {
        id: 1,
        score: 0
    },
    {
        id: 2,
        score: 0
    },
    {
        id: 3,
        score: 0
    }
]

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function slowRandom(min, max) {
    await delay(1000);
    return Math.random() * (max - min) + min;
}

function generate() {
    students.map(async (student) => {
        student.score = await slowRandom(0, 10);
    });
    console.log(students);
}
generate();