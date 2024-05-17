import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): BookList[] {
    return [
      {
        bookName: 'Çalıkuşu',
        writerName: 'Reşat Nuri Güntekin',
        amount: 100,
      },
      {
        bookName: ' Drina Köprüsü ',
        writerName: 'İvo Andriç',
        amount: 204,
      },
      {
        bookName: 'Karartma Geceleri ',
        writerName: 'Rıfat Ilgaz',
        amount: 35,
      },
      {
        bookName: 'Mai ve Siyah  ',
        writerName: 'Halit Ziya Uşaklıgil',
        amount: 107,
      },
      {
        bookName: 'Ölü Canlar',
        writerName: 'Gogol',
        amount: 150,
      },
      {
        bookName: 'Robinson Crusoe  ',
        writerName: 'Daniel Defoe',
        amount: 79,
      },
      {
        bookName: 'Sefiller',
        writerName: 'Victor Hugo',
        amount: 240,
      },
      {
        bookName: ' Suç ve Ceza',
        writerName: 'Dostoyevski',
        amount: 80,
      },
      {
        bookName: ' İki Şehrin Hikayesi  ',
        writerName: 'Charles Dickens',
        amount: 59,
      },
      {
        bookName: ' Esir Şehrin İnsanları  ',
        writerName: 'Kemal Tahir',
        amount: 76,
      },
    ];
  }
}

export class BookList {
  bookName!: string;
  writerName!: string;
  amount!: number;
}
