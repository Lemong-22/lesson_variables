import readline from  'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function mulai(){
    rl.question("masukkan angka : ", output)
}

async function output(input){
    try {
        console.log("angka sedang dianalisa . . .")
        let wait = await proses(input)
        console.log(`angka adalah bilangan genap ${wait}`)
    } catch(reject){
        console.log(`angka adalah bilangan ganjil ${reject}`)
    };
    rl.close()
};

function proses(input){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let angka = parseInt(input)
            if (angka %2 == 0){
                resolve("teranalisa dalam 2 detik");
            } else{
                reject("teranalisa dalam 2 detik");
            };
        }, 2000);;
    });
};

mulai()