'use strict'
const controller = require('./20880108_Ex03');
const slowController = require('./20880108_Ex05');

const dsSinhVien = [
    {
        mssv: "001",
        ho: "Le",
        ten: "Van Minh",
        diem: [
            {
                mon: "Toan",
                diem: 0
            },
            {
                mon: "Van",
                diem: 0
            },
            {
                mon: "Ly",
                diem: 0
            },
            {
                mon: "Hoa",
                diem: 0
            },
            {
                mon: "Sinh",
                diem: 0
            },
            {
                mon: "Tieng Anh",
                diem: 0
            }
        ]
    },
    {
        mssv: "002",
        ho: "Nguyen",
        ten: "My Linh",
        diem: [
            {
                mon: "Toan",
                diem: 0
            },
            {
                mon: "Van",
                diem: 0
            },
            {
                mon: "Ly",
                diem: 0
            },
            {
                mon: "Hoa",
                diem: 0
            },
            {
                mon: "Sinh",
                diem: 0
            },
            {
                mon: "Tieng Anh",
                diem: 0
            }
        ]
    },
    {
        mssv: "003",
        ho: "Tran",
        ten: "Linh Dan",
        diem: [
            {
                mon: "Toan",
                diem: 0
            },
            {
                mon: "Van",
                diem: 0
            },
            {
                mon: "Ly",
                diem: 0
            },
            {
                mon: "Hoa",
                diem: 0
            },
            {
                mon: "Sinh",
                diem: 0
            },
            {
                mon: "Tieng Anh",
                diem: 0
            }
        ]
    },
    {
        mssv: "004",
        ho: "Nguyen",
        ten: "Cong Danh",
        diem: [
            {
                mon: "Toan",
                diem: 0
            },
            {
                mon: "Van",
                diem: 0
            },
            {
                mon: "Ly",
                diem: 0
            },
            {
                mon: "Hoa",
                diem: 0
            },
            {
                mon: "Sinh",
                diem: 0
            },
            {
                mon: "Tieng Anh",
                diem: 0
            }
        ]
    },
    {
        mssv: "005",
        ho: "Dang",
        ten: "Hong Quan",
        diem: [
            {
                mon: "Toan",
                diem: 0
            },
            {
                mon: "Van",
                diem: 0
            },
            {
                mon: "Ly",
                diem: 0
            },
            {
                mon: "Hoa",
                diem: 0
            },
            {
                mon: "Sinh",
                diem: 0
            },
            {
                mon: "Tieng Anh",
                diem: 0
            }
        ]
    }
]

console.log('>>>>>     Danh sach sinh vien duoc khoi tao: ');
console.log(JSON.stringify(dsSinhVien));
console.log('>>>>>     Danh sach sinh vien sau khi chay generate: ');
controller.generate(dsSinhVien);
console.log(JSON.stringify(dsSinhVien));
console.log('>>>>>     Danh sach sinh vien sau khi chay average: ');
controller.average(dsSinhVien);
console.log(JSON.stringify(dsSinhVien));
console.log('>>>>>     Danh sach sinh vien sau khi chay normalize: ');
controller.normalize(dsSinhVien);
console.log(JSON.stringify(dsSinhVien));
console.log('>>>>>     Danh sach sinh vien sau khi chay slow-generate: ');
(async function () {
    await slowController.generate(dsSinhVien);
    console.log(JSON.stringify(dsSinhVien));
})();
console.log('>>>>>     Danh sach sinh vien sau khi chay average (slowController): ');
controller.average(dsSinhVien);
console.log(JSON.stringify(dsSinhVien));
console.log('>>>>>     Danh sach sinh vien sau khi chay normalize (slowController): ');
controller.normalize(dsSinhVien);
