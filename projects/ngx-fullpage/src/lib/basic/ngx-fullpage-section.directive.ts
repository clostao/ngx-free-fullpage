import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngx-fullpage-section]'
})
export class NgxFullpageSectionDirective {

  constructor(private element : ElementRef) { 
    this.element.nativeElement.style.height = "100%";
    this.element.nativeElement.style.width = "100%";
  }

}
