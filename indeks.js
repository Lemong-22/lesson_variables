// let x = 0;
// let y = 3;
// function add(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }
//console.log(x+y);
const app = require('./app.js');
(
    () => {
        let hasil = app.plus(5, 8);
        console.log("hasilnya adalah : ", hasil);
        console.log(app.someNumber);
    }
)();