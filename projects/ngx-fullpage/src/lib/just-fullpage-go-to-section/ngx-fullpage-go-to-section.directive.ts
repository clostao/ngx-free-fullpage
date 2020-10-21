import { NgxFullpageService } from '../ngx-fullpage.service';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngx-fullpage-go-to-section]'
})
export class NgxFullpageGoToSectionDirective {

  @Input('ngx-fullpage-go-to-section')
  section : number

  constructor(private element : ElementRef, private justFullpageService : NgxFullpageService) {
    this.element.nativeElement.onclick = () => this.justFullpageService.goTo(this.section);
  }

}
