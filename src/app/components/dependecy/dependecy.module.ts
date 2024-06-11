import { NgModule } from '@angular/core';
import { DependencyRouting } from './dependecy.routing';
import { DependecyComponent } from './dependecy.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/service/productService';

@NgModule({
  declarations: [DependecyComponent],
  imports: [DependencyRouting, CommonModule, HttpClientModule],
  exports: [],
  providers: [
    // ProductService // DI Token- default Typr Token
    // {provide: ProductService, useClass:ProductService} // Type Token
    // { provide: 'productService', useClass: ProductService } // string token. string tokenlar kullanmak bazen dezavanatajlı olabilir. en büyük dezavantajı aynı isinle en son oluşturulan token diğerlerini ezer ve tüm tokenlar en son oluşturulan gibi davranır.,
    // { provide: productServiceIT, useClass: ProductService }, //Injection token.
    {
      provide: 'example',
      useValue: () => {
        return alert(
          ' merhaba ben provider türlerinden useValue örneğiyim.. Benimle basit metinsel değerleri provider edebilecğiniz gibi, bir fonksiyonu da provider edebilirsiniz..'
        );
      },
    },
    {
      provide: 'useFactory',
      useFactory: (httpClient: HttpClient) => {
        let useData: any;
        const obs = httpClient
          .get('https://jsonplaceholder.typicode.com/posts')
          .subscribe((data) => {
            useData == data;
            console.log(data);
          });
        return new ProductService();
      },
      deps: [HttpClient],
    },
  ],
})
export class DependencyModule {}
