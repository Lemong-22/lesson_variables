import readline from 'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let randomnum = Math.floor(Math.random()*6);
let nyawa = 0

console.clear()
console.log("========GAME TEBAK ANGKA BY Yosia ========")

function nanya (){
    rl.question("TEBAK ANGKA 1-5 : ", cek)}

function cek(input){
    let angka = parseInt(input);
    if (nyawa==2){
        console.log(`Kesempatan menjawab habis, jawabannya adalah ${randomnum}`);
        rl.close()
    } else if (angka!=randomnum){
        nyawa+=1
        console.log(`SALAH, kesempatan menjawab ${nyawa}/3`)
        nanya()
    } else if (angka==randomnum){
        console.log(`BENAR!, jawabannya adalah ${randomnum}`)
        rl.close()
    };
};

nanya()