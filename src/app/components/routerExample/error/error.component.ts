import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  template: `<h3>Belirtilen rota bulunamadı....</h3>
    <h3>
      query string kontrol: <span style="color:red"> {{ one }}</span>
    </h3>`,
})
export class ErrorComponent {
  one = 'query == false';
  two = 'query == false';
  query = 'query == true';

  constructor(private activatedRoute: ActivatedRoute) {
    const val = activatedRoute.snapshot.queryParams['query'];
    console.log(val == 'true');
    this.one = val == 'true' ? this.query : this.two;
  }
}
