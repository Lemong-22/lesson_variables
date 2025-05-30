import readline from 'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
console.clear
console.log("=====GAME TEBAK ANGKA By YOSIA======")

const percobaan = 3
let nyawa = percobaan

function tanya(){
    rl.question("tebak angka 1-5 : ", cek)
};

function tanyaulang(){
    rl.question("lanjut? (y/n)", lanjut)
    function lanjut(a){
        if (a=="y"){
            nyawa=percobaan
            tanya()
        } else {
            console.log("terimakasih sudah bermain")
            rl.close()
        }
    }
}


function cek(input){
    let angkaRandom = Math.floor(Math.random()*6)
    let jawaban = parseInt(input)
    if (nyawa==0){
        console.log("kesempatan menjawab habis anda gagal")
        tanyaulang()
    }else if (jawaban!=angkaRandom){
        nyawa-=1
        console.log(`jawaban salah kesempatan menjawab ${nyawa}/3`)
        tanya()
    }else{
        console.log(`selamat anda benar jawabannya adalah ${angkaRandom}`)
        tanyaulang()
    }
};

tanya();
//ngeribetin pake looping padahal max nyawa nya bisa langsung aja di set wkwk
            //     while(nyawa<3){
            //         nyawa++
            //     }
            //     tanya()
            // } else{
            // nyawa+=3
            // tanya()
            // }