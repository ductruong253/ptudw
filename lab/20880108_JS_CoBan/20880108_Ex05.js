'use strict';

const students = [
    {
        firstName: "Jack",
        lastName: "Wood",
        age: 15
    },
    {
        firstName: "Ben",
        lastName: "Pavilen",
        age: 17
    },
    {
        firstName: "Dan",
        lastName: "Suru",
        age: 12
    }
]

console.log("Before sorting: ");
console.log(students);

let sorted = students.sort((student1, student2) => (student1.age - student2.age));
console.log("After sorting: ");
console.log(sorted);