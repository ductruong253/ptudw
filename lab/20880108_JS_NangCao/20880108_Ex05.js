'use strict'

const slowRandom = require('./20880108_Ex04');

let slowController = {};

slowController.generate = async (students) => {
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        for (let j = 0; j < student.diem.length; j++) {
            student.diem[j].diem = await slowRandom(0, 10);
        }
    }
}

slowController.average = (students) => {
    if (students) {
        students.map(student => {
            student.diemTB = 0;
            if (student.diem) {
                student.diem.map(diem => student.diemTB += diem.diem);
                student.diemTB /= student.diem.length;
            }
        })
    }
}

slowController.normalize = (students) => {
    if (students) {
        students.map(student => {
            student.diemTB = student.diemTB.toFixed(2);
            if (student.diem) {
                student.diem.map(diem => diem.diem = diem.diem.toFixed(2));
            }
        })
    }
}

module.exports = slowController;