// var someList = [1,2,3];
// console.log(someList[0]);
const os = require('os');
// var someObject = {
//     id : 'abc123',
//     name : 'john'
// };
// console.log(someObject.name);
let someNumber = 10;
function plus(num1,num2){
    const result = num1 + num2 + someNumber;
    return result;
}
module.exports.plus = plus;
//module.exports.someNumber = someNumber;
//console.log(module);
const axios = require('axios');
var totalMemory = os.totalmem();
console.log(totalMemory);