import { Directive, ElementRef } from '@angular/core';
import { NgxFullpageService } from '../ngx-fullpage.service';

@Directive({
  selector: '[ngx-fullpage-go-to-last]'
})
export class NgxFullpageGoToLastDirective {

  constructor(private el : ElementRef, private justFullpageService : NgxFullpageService) { 
    this.el.nativeElement.onclick = (() => this.justFullpageService.goLast());
  }


}
