import {
    ic,
    nat64,
    Principal,
    StableBTreeMap,
    update,
    text,
    query
} from 'azle';

// Fungsi untuk mengembalikan buku yang dipinjam
export function kembalikanBuku(bookInventory: StableBTreeMap<Principal, BookInfo>, bookId: nat64): string {
    const caller = ic.caller();

    if (bookInventory.containsKey(caller)) {
        bookInventory.delete(caller);
        return `Buku dengan ID ${bookId} berhasil dikembalikan.`;
    } else {
        return 'Anda tidak memiliki buku tersebut dalam peminjaman.';
    }
}