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
import { tambahBuku, lihatDaftarBuku } from './BorrowBook';
import { kembalikanBuku } from './ReturnBook'; // Mengimpor fungsi dari file terpisah

// Tipe data untuk menyimpan informasi buku
type BookInfo = {
    bookId: nat64;
    title: string;
};

// Fungsi untuk menambahkan buku ke dalam daftar
export function tambahBuku(bookInventory: StableBTreeMap<Principal, BookInfo>, bookId: nat64, title: string): void {
    const bookInfo: BookInfo = {
        bookId: bookId,
        title: title,
    };

    bookInventory.insert(ic.caller(), bookInfo);
}

// Fungsi untuk melihat daftar buku yang terdaftar
export function lihatDaftarBuku(bookInventory: StableBTreeMap<Principal, BookInfo>): Array<BookInfo> {
    const bookList: Array<BookInfo> = [];

    bookInventory.forEach((_key, value) => {
        bookList.push(value);
    });

    return bookList;
}