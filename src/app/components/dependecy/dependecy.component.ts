import { Component, Inject } from '@angular/core';
import { productServiceIT } from '../injection-token';
import { ProductService } from 'src/app/service/productService';

@Component({
  selector: 'app-dependecy',
  template: `<div class="content" role="main">
    <table>
      <thead>
        <tr>
          <th>Kitap Adı</th>
          <th>Yazar Adı</th>
          <th>Adedi</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of prd">
          <td>{{ i.bookName }}</td>
          <td>{{ i.writerName }}</td>
          <td>{{ i.amount }}</td>
        </tr>
      </tbody>
    </table>
    <button (click)="click()">useValue example Click</button>
    <button (click)="clickUseFactory()">useFactory example Click</button>
  </div> `,
  styles: [
    `
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 90%;
        margin: 20px;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }

      button {
        padding: 10px;
        background-color: black;
        color: white;
        border-color: transparent;
        margin: 0 19px;
        border-radius: 10px;
        cursor: pointer;
      }
    `,
  ],
})
export class DependecyComponent {
  prd: any[] = [];
  constructor(
    // @Inject('productService')private productService: ProductService //modul.ts dosyasında productService stringToken olarak tanımlandığı için burada bu şekilde çağrıldı.
    // @Inject(productServiceIT) private productService: ProductService injection token
    @Inject('example') private func: any,
    @Inject('useFactory') private productService: ProductService
  ) {
    this.productService.getProducts().forEach((x) => {
      this.prd.push(x);
    });
    console.log(this.prd);
  }

  click() {
    this.func();
  }
  clickUseFactory() {
    alert(
      ' console kontrol et. productların yüklenmesi; HttpClient servisle diğer dataların getirilmesine bağlandı. '
    );
  }
}
