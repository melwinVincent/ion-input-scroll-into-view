import { Directive, ElementRef, HostListener } from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed'

@Directive({
    selector: '[ionic3-input-scroll-into-view]'
})

export class Ionic3InputScrollIntoViewDirective {
  
  constructor(private elementRef : ElementRef){
  }

  @HostListener('ionFocus', ['$event']) ionFocus(event: any) {
      setTimeout(()=> {
          scrollIntoView(this.elementRef.nativeElement, {
              scrollMode: 'if-needed',
              block: 'nearest',
              inline: 'nearest',
          })
      },250);
  }

}