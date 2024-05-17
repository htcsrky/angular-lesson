import { Component } from '@angular/core';
import { ProductService } from 'src/app/productService';

@Component({
  selector: 'app-dependecy',
  template: `<table>
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
  </table> `,
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
    `,
  ],
})
export class DependecyComponent {
  prd: any[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().forEach((x) => {
      this.prd.push(x);
    });
    console.log(this.prd);
  }
}
