let x = 0;
let y = 3;
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
//console.log(x+y);
(
    () => {
        let hasil = add(5, 8);
        console.log("hasilnya adalah : ", hasil);
    }
)();