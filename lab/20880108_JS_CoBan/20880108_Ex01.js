//3.2 Cú pháp cơ bản

//Khai báo biến và kiểu dữ liệu
'use strict';
var age = 18; //number
var name = "Jane"; //string
var name = { first: "Jane", last: "Doe" }; //object
var truth = false; //boolean
var sheets = ["HTML", "CSS", "JS"]; //array
var a; typeof a; //undefined
var a = null; //value null

//Cấu trúc điều khiển
//if-else
if ((age >= 14) && (age < 19)) {
    let status = "Eligible.";
} else {
    let status = "Not eligible.";
}
//Switch-case
let text;
switch (new Date().getDate()) {
    case 6:
        text = "Saturday";
        break;
    case 0:
        text = "Sunday";
    default:
        text = "Whatever";
}

//Vòng lặp
//For loop
let sum = 0;
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0; i < a.length; i++) {
    sum += a[i];
} //parsing an array

//While loop
i = 1;
while (i < 100) {
    i *= 2;
    console.log(i + ", ");
}
//Do-while loop
i = 1;
do {
    i *= 2;
    console.log(i + ", ");
} while (i < 100);

//Khai báo hàm
function addnumber(a, b) {
    return a + b;
}
var x = addnumber(1, 2);

//Đối tượng
var student = {             //object name
    firstName: "Jane",      //list of properties
    lastName: "Doe",
    age: 18,
    height: 170,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
student.age = 19;
student[age]++;
var name = student.fullName();

//Sắp xếp mảng
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b; });