import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  template: `
    <div class="content" role="main">
      <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
        <input
          type="text"
          name="name"
          placeholder="Please, Your's name write"
          ngModel
        />
        <br />
        <input
          type="text"
          name="surname"
          placeholder="Please, Your's surname write"
          ngModel
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Please, Your's email write"
          ngModel
        />
        <br />
        <input
          type="number"
          name="phone"
          placeholder="Please, Your's phone write"
        />
        <br />
        <div ngModelGroup="address">
          <input type="text" name="country" placeholder="Country" ngModel />
          <br />
          <input type="text" name="city" placeholder="City" ngModel />
          <br />
          <input type="text" name="address" placeholder="Address" ngModel />
          <br />
        </div>
        <button style="float: right;">Submit</button>
      </form>
    </div>
  `,
  styles: [
    `
      input {
        margin: 10px;
        width: 300px;
        padding: 10px;
      }
    `,
  ],
})
export class TemplateDrivenFormsComponent implements OnInit {
  @ViewChild('frm', { static: true }) frm!: NgForm;
  onSubmit(data: any) {
    console.log('Form Data', data);
    console.log('form value', this.frm.value);
    console.log(` form valid ${this.frm.valid}`);
    console.log(` form touched ${this.frm.touched}`);
    console.log(` form submit ${this.frm.submitted}`);
  }

  ngOnInit(): void {
    setTimeout(() => {
      // this.frm.controls['email'].setValue('example@gmail.com') tek bir formControle değer atamak için kullanılır.
      // this.frm.control.patchValue({
      //   name: 'Template-Driven',
      //   surname: 'Form',
      // })  form da sadece belirli formControl değerlerine değer atanmak istendiğinde kullanılır.
      // setValue ile fomdaki tüm formControllere değer atama işlemi yapılır. setValue kullanıldı ise değeri boş geçemezsiniz. zaten uygulama çalışmada hata verecektir. :))
      //form değerlerini sıfırlama this.frm.reset(), this.frm.onReset(), this.frm.resetForm() kullanılabilir.
      this.frm.setValue({
        name: 'Template-Driven',
        surname: 'Form',
        email: 'example@gmail.com',
        address: {
          country: 'Turkey',
          city: 'İstanbul',
          address: 'exaple address',
        },
      });
      // let x = this.frm.controls['address'] as FormGroup;
      // x.controls['country'].setValue('Turkey');
    }, 200);
  }
}
