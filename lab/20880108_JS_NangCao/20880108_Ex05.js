'use strict'

const slowRandom = require('./20880108_Ex04');

const generate =  (students) => {
    if (students){
        students.map(student => {
            if (student.diem) {
                student.diem.map(async mon => {
                    mon.diem = await slowRandom(0,10);
                })
            }
        })
    }
}

const average = (students) => {
    if (students){
        students.map(student => {
            student.diemTB = 0;
            if (student.diem){
                student.diem.map(diem => student.diemTB += diem.diem);
            student.diemTB /= student.diem.length;
            }
        })
    }
}

const normalize = (students) => {
    if (students) {
        students.map(student => {
            student.diemTB = student.diemTB.toFixed(2);
            if (student.diem){
                student.diem.map(diem => diem.diem = diem.diem.toFixed(2));
            }
        })
    }
}

module.exports.generate = generate;
module.exports.average = average;
module.exports.normalize = normalize;