import readline from 'readline';
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function nanya() {
    let randomNum1 = Math.floor(Math.random()*10)
    let randomNum2 = Math.floor(Math.random()*10)
    rl.question(`${randomNum1} + ${randomNum2} = `, function(input){
    let result = randomNum1 + randomNum2;
    let angka = parseInt(input)

    if(input == "n"){
        rl.close();
    } else if (angka == result){
        console.log("JAWABAN BENAR!");
        nanya()
    } else if (angka != result){
        console.log("JAWABAN SALAH!");
        nanya()
    }
})
}

nanya()