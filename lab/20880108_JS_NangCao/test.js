function getRandom(min,max) {
    return new Promise(resolve => setTimeout(resolve, 1000, Math.random()*(max - min) + min));
}

let students = [
    {
        id: 1,
        score: 0
    },
    {
        id: 2,
        score: 0
    }
]

function slowRandom(){
    students.map(async (student) => {
        student.score = await getRandom(0, 10);
    })
    console.log(students);
}
slowRandom();