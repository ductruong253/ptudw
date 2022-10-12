'use strict'

const random = require('./20880108_Ex02');

let controller = {}

controller.generate = (students) => {
    if (students) {
        students.map(student => {
            if (student.diem) {
                student.diem.map(mon => {
                    mon.diem = random(0, 10);
                })
            }
        })
    }
}

controller.average = (students) => {
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
controller.normalize = (students) => {
    if (students) {
        students.map(student => {
            student.diemTB = student.diemTB.toFixed(2);
            if (student.diem) {
                student.diem.map(diem => diem.diem = diem.diem.toFixed(2));
            }
        })
    }
}

module.exports = controller;