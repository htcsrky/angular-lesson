import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-string',
  template: `
    <a
      href="javascript:void(0)"
      routerLinkActive="active"
      routerLink="queryString"
      [queryParams]="{ query: true }"
      style="margin-right: 30px;"
    >
      Query String true
    </a>
    <a
      href="javascript:void(0)"
      routerLinkActive="active"
      routerLink="queryString"
      [queryParams]="{ query: false }"
    >
      Query String false
    </a>
  `,
})
export class QueryStringComponent {}
