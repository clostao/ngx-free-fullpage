import { NgxFullpageService } from '../ngx-fullpage.service';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngx-fullpage-go-to-first]'
})
export class NgxFullpageToFirstButtonDirective {
  
  constructor(private el : ElementRef, private justFullpageService : NgxFullpageService) { 
    this.el.nativeElement.onclick = (() => this.justFullpageService.goTo(0));
  }

}
