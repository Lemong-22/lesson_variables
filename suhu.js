import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function suhu (input){
    if(input == "keluar"){
        rl.close();
    } else if (input<0){
        console.log(`suhu ${input} disarankan pakai jaket tebal`);
        tanya()
    } else if(input>=0 && input<10){
        console.log(`suhu ${input} disarankan pakai sweater`);
        tanya()
    } else if(input>=10 && input<20){
        console.log(`suhu ${input} disarankan pakai jaket tipis`);
        tanya()
    } else if(input>=20){
        console.log(`suhu ${input} disarankan pakai kaos`);
        tanya()
    } else {
        console.log(`${input} tidak valid`)
        tanya()
    };
};

function tanya(){
    rl.question("Masukkan suhu, (keluar) untuk udahan : ", suhu)
};

tanya()



// coba, bikinin program yang ada user input buat masukkin suhu udara, 
// kalo suhunya di bawah 0, dikasih sugesti pake jaket tebal
// kalo suhunya di antara 0 sama 10, sugesti pake sweater
// kalo suhunya di antara 10 sama 20, sugesti pake jaket tipis
// kalo suhunya di atas 20, sugesti pake kaos
// sugestinya diprint aja ke console biar gampang