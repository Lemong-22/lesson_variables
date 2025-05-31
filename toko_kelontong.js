import readline from 'readline/promises'
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let inventory = []

// function lihatBarang (){
//     if (inventory.length===0){
//         console.log("tidak ada barang yang ditambahkan")
//         return;
//     }
//     console.log("INVENTORY TOKO ODADING MANG OLEH")
//     for(const barang of inventory){
//         console.log(`ID : ${barang.id}`)
//         console.log(`NAMA : ${barang.nama}`)
//         console.log(`HARGA : ${barang.harga}`)
//         console.log(`STOK : ${barang.stok}`)
//     }
// }

function nyari(keyword){
    let ditemukan = false
    for(const barang of inventory){
        if (barang.id.toLowerCase().toString().includes(keyword.toLowerCase())){
        console.log("barang ditemukan berdasarkan id")
        console.log(`ID : ${barang.id}`)
        console.log(`NAMA : ${barang.nama}`)
        console.log(`HARGA : ${barang.harga}`)
        console.log(`STOK : ${barang.stok}`)
        ditemukan = true
        break
        } else if (barang.nama.toLowerCase().toString().includes(keyword.toLowerCase())) {
        console.log("barang ditemukan berdasarkan nama")
        console.log(`ID : ${barang.id}`)
        console.log(`NAMA : ${barang.nama}`)
        console.log(`HARGA : ${barang.harga}`)
        console.log(`STOK : ${barang.stok}`)
        ditemukan = true
        break
        } else if (barang.harga.toLowerCase().toString().includes(keyword.toLowerCase())) {
        console.log("barang ditemukan berdasarkan harga")
        console.log(`ID : ${barang.id}`)
        console.log(`NAMA : ${barang.nama}`)
        console.log(`HARGA : ${barang.harga}`)
        console.log(`STOK : ${barang.stok}`)
        ditemukan = true
        break
    }   else if (barang.stok.toLowerCase().toString().includes(keyword.toLowerCase())) {
        console.log("barang ditemukan berdasarkan stok")
        console.log(`ID : ${barang.id}`)
        console.log(`NAMA : ${barang.nama}`)
        console.log(`HARGA : ${barang.harga}`)
        console.log(`STOK : ${barang.stok}`)
        ditemukan = true
        break
    } else{
        console.log("tidak ditemukan")
        rl.close()
    }
}
if (ditemukan==true){
    setTimeout(()=>{
        nanya2()
    },1000)
}
}

async function nanya(){
    const id = await rl.question("masukkan id : ")
    const nama = await rl.question("masukkan nama : ")
    const harga = await rl.question("masukkan harga : ")
    const stok = await rl.question("masukkan stok : ")
    cek(id,nama,harga,stok)
}
async function nanya2(){
    const yn = await rl.question("ingin mencari barang mu? (y/n) : ")
    if (yn == "n"){
        console.log("terimakasih telah menambahkan barang")
        setTimeout(()=>{
            console.clear()
            rl.close()
        },1000)
    } else{
        console.clear()
        const cari = await rl.question("masukkan pencarian : ")
        nyari(cari)
    }
}
function cek(id,nama,harga,stok){
    console.log("sedang menambahkan barang . . .")
        setTimeout(() => {
                const barangBaru = {
                id : id,
                nama : nama,
                harga : harga,
                stok : stok
                }
                inventory.push(barangBaru)
                console.log("barang berhasil ditambahkan")
                nanya2()
            },2000)
}

  

nanya()