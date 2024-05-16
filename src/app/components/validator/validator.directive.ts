import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({ selector: '[appValidator]', standalone: true })
export class ValidatorDirective implements OnInit, OnChanges {
  //#region Variable
  i = 0;

  @Input('submitted') submitted = false;
  @Input('appValidator') fc!: AbstractControl;
  @HostListener('document:click', ['$event']) touched(event: any) {
    const name = event.target.attributes.formcontrolname;
    if (name != undefined) {
      if (this.ngControl.name == name.value) {
        this.i++;
      } else {
        if (this.i >= 1) {
          this.fc.markAsTouched();
        }
      }
    }
    this.addValidator();
  }
  @HostBinding('class.is-invalid')
  invalid = false;
  //#endregion
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) {}

  ngOnInit() {}
  ngOnChanges() {
    this.addValidator();
    this.fc.valueChanges.subscribe((data) => {
      this.addValidator();
    });
  }
  addValidator() {
    if (
      this.fc.invalid &&
      (this.fc.dirty || this.fc.touched || this.submitted)
    ) {
      this.invalid = true;
      this.fc.markAsTouched();
      this.addMessage();
    } else {
      this.invalid = false;
      this.removeMessage();
    }
  }
  addMessage() {
    if (this.removeAllNode()) {
      const element = this.renderer.createElement('mat-error');

      let btnText = '';
      const errors = this.fc.errors;
      if (errors != null && errors['required']) {
        btnText = `Zorunlu alanları boş bırakamazsınız`;
      } else if (errors != null && errors['min']) {
        btnText = `Girmeniz gereken minumum değerin altında değer girdiniz`;
      } else if (errors != null && errors['max']) {
        btnText = `Girmeniz gereken max değerin üzerinde değer girdiniz`;
      } else if (errors != null && errors['minlength']) {
        btnText = `Minumum karakter girişi yapmalısın.`;
      } else if (errors != null && errors['maxlength']) {
        btnText = `Max karakter girişini aştınız.`;
      } else if (errors != null && errors['pattern']) {
        btnText =
          `Belirtilen şartlara uymayan bilgi girişi yaptınız. - ` +
          errors['pattern'].actualValue;
      } else if (errors != null && errors['email']) {
        btnText = `Doğru email yazdığınızdan emin olun`;
      } else if (errors != null && errors['capitalLetter']) {
        btnText = `İlk Harf Büyük Olmalı!!!`;
      } else if (
        errors != null &&
        errors['passwordCount' || errors['passwordStrength']]
      ) {
        btnText = `Lütfen Şifreniz 6 karakter olmalı ve Şifre aşağıdakilerden en az ikisini içermelidir: sayılar, küçük harfler, büyük harfler veya özel karakterler.`;
      } else if (errors != null && errors['notEquivalent']) {
        btnText = `İki şifreniz aynı olmalıdır.`;
      } else {
        btnText = `Bilinmeyen bir nedenden dolayı doğrulamaya takıldınız.`;
      }
      const text = this.renderer.createText(btnText);
      const parent = this.renderer.parentNode(this.elRef.nativeElement);
      this.renderer.addClass(element, 'invalid-feedback');
      this.renderer.appendChild(element, text);
      this.renderer.appendChild(parent, element);
    }
  }
  removeMessage() {
    const parent = this.renderer.parentNode(this.elRef.nativeElement);
    if (parent != null || parent != undefined) {
      Array.from(parent.children).forEach((child) => {
        if ((child as HTMLDivElement).classList.contains('invalid-feedback')) {
          (child as HTMLDivElement).remove();
        }
      });
    }
  }
  removeAllNode() {
    const parent = this.renderer.parentNode(this.elRef.nativeElement);
    var nodes = (parent as HTMLDivElement).childNodes;
    for (var i = 0; i < nodes.length; i++) {
      const classList = (nodes[i] as HTMLElement).classList?.contains(
        'invalid-feedback'
      );
      if (
        classList != undefined &&
        (nodes[i] as HTMLElement).classList.contains('invalid-feedback')
      ) {
        (nodes[i] as HTMLDivElement).remove();
      }
    }
    return true;
  }
}
