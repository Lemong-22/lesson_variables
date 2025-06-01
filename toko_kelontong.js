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

function displayItem(item, foundBy) {
    console.log(`Barang ditemukan berdasarkan ${foundBy}:`);
    console.log(`ID : ${item.id}`);
    console.log(`NAMA : ${item.nama}`);
    console.log(`HARGA : ${item.harga}`);
    console.log(`STOK : ${item.stok}`);
}

async function searchItem(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    let itemFound = null;

    for (const item of inventory) {
        if (item.id.toLowerCase().includes(lowerKeyword)) {
            displayItem(item, "ID");
            itemFound = item;
            break;
        }
        if (item.nama.toLowerCase().includes(lowerKeyword)) {
            displayItem(item, "Nama");
            itemFound = item;
            break;
        }
        // Assuming harga and stok are stored as strings, or you want to search their string representation
        if (item.harga.toString().toLowerCase().includes(lowerKeyword)) {
            displayItem(item, "Harga");
            itemFound = item;
            break;
        }
        if (item.stok.toString().toLowerCase().includes(lowerKeyword)) {
            displayItem(item, "Stok");
            itemFound = item;
            break;
        }
    }

    if (itemFound) {
        setTimeout(() => {
            promptSearchOrExit(); // Renamed nanya2
        }, 1000);
    } else {
        console.log("Barang tidak ditemukan.");
        // Decide if we want to immediately ask to search again or exit
        // For now, let's go back to promptSearchOrExit to give user another chance or exit
        setTimeout(() => {
            promptSearchOrExit();
        }, 1000);
    }
}

// Removed the global 'ditemukan' check here

async function promptAddItemDetails() { // Renamed nanya
    const id = await rl.question("Masukkan ID barang: ");
    const nama = await rl.question("Masukkan Nama barang: ");
    const harga = await rl.question("Masukkan Harga barang: "); // Consider converting to Number
    const stok = await rl.question("Masukkan Stok barang: "); // Consider converting to Number
    addItemToInventory(id, nama, harga, stok); // Renamed cek
}

async function promptSearchOrExit() { // Renamed nanya2
    const continueSearch = await rl.question("Ingin mencari barang atau menambahkan barang lain? (cari/tambah/tidak): ");
    if (continueSearch.toLowerCase() === "tidak") {
        console.log("Sedang menutup program..."); // Loading message
        setTimeout(() => {
            console.clear(); // Clear console first
            console.log("Terima kasih telah menggunakan program ini!"); // Thanks message
            rl.close();
        }, 1500); // Delay for 1.5 seconds
    } else if (continueSearch.toLowerCase() === "cari") {
        console.clear();
        const keyword = await rl.question("Masukkan kata kunci pencarian: ");
        searchItem(keyword); // Renamed nyari
    } else if (continueSearch.toLowerCase() === "tambah") {
        console.clear();
        promptAddItemDetails();
    }
    else {
        console.log("Pilihan tidak valid. Silakan coba lagi.");
        promptSearchOrExit();
    }
}

function addItemToInventory(id, nama, harga, stok) { // Renamed cek
    console.log("Sedang menambahkan barang...");
    setTimeout(() => {
        const newItem = {
            id: id,
            nama: nama,
            harga: harga, // Store as number?
            stok: stok    // Store as number?
        };
        inventory.push(newItem);
        console.log("Barang berhasil ditambahkan.");
        // After adding, let's ask if they want to search or add more, or exit.
        promptSearchOrExit();
    }, 2000);
}

// Start the program
promptAddItemDetails();