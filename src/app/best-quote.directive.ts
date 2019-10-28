import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appBestQuote]'
})
export class BestQuoteDirective {

  numberOfClicks = 0;

  constructor(private elem:ElementRef) {this.elem.nativeElement.style.color="orangered"; }

}
