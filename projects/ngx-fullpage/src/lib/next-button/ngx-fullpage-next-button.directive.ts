import { Directive, ElementRef } from '@angular/core';
import { NgxFullpageService } from '../ngx-fullpage.service';

@Directive({
  selector: '[ngx-fullpage-next-button]'
})
export class NgxFullpageNextButtonDirective {
  
  constructor(private el : ElementRef, private justFullpageService : NgxFullpageService) {
    this.el.nativeElement.onclick = (_ev) => this.justFullpageService.goNext();
  }

}
