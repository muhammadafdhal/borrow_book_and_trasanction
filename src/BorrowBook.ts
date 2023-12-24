import {
    Canister,
    ic,
    nat64,
    Opt,
    Principal,
    StableBTreeMap,
    update,
    text,
    query
} from 'azle';

let bookInventory = StableBTreeMap<Principal, nat64>(0);

export default Canister({
    pinjamBuku: update([Principal, nat64], nat64, (user, bookId) => {
        // Logika untuk meminjam buku
        // Mengurangi jumlah buku yang tersedia dalam inventaris dan tambahkan ke daftar peminjaman user

        return bookId; // atau berikan kembalian yang sesuai
    }),

    simpanBuku: update([Principal, nat64], text ,(user, bookId)=>{
        // Logika untuk menyimpan buku
        // Menambahkan kembali buku ke inventaris dari daftar peminjaman user

        return "Berhasil menyimpan buku"; // atau berikan kembalian yang sesuai
    }),

    inquiry: query([], nat64, ()=>{
        // Logika untuk melihat jumlah buku yang tersedia dalam inventaris
        return getTotalBooks(bookInventory);
    })
});

function getTotalBooks(bookInventory: StableBTreeMap<Principal, nat64>): nat64 {
    // Logika untuk menghitung total buku yang tersedia
    // menjumlahkan jumlah buku dari semua pengguna

    let total = 0n;
    // Logika perhitungan total buku
    return total;
}
