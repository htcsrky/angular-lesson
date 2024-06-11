import { Directive, ElementRef, Self, SkipSelf } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Directive({
  selector: '[appD]',
  standalone: true,
  providers: [RandomService],
})
export class DDirective {
  constructor(
    private elementRef: ElementRef,
    @Self() private randomService: RandomService
  ) {
    elementRef.nativeElement.innerHTML = 'Directive =>' + randomService.random;
  }
}
