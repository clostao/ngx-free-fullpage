import { Directive, ElementRef, Input } from '@angular/core';
import { NgxFullpageService } from '../ngx-fullpage.service';

@Directive({
  selector: '[ngx-fullpage-wrapper]',
  providers: [NgxFullpageService]
})
export class NgxFullpageWrapperDirective {

  @Input()
  section : number = 0;

  delta = 0;

  constructor(private element : ElementRef, private justFullpageService : NgxFullpageService) { 
    this.element.nativeElement.style['overflow'] = 'hidden'
    this.element.nativeElement.style['scroll-behavior'] = "smooth";
    this.element.nativeElement.onwheel = (ev: WheelEvent) => this.wheelHandler(ev);
    this.justFullpageService.addWrapper(element, this.section);
  }

  wheelHandler(event : WheelEvent) {
    this.delta += event.deltaY;
    if (this.delta === event.deltaY)
      setTimeout(() => {
        let direction = Math.abs(this.delta) / this.delta;
        this.justFullpageService.scroll(direction);
        setTimeout(() => this.delta = 0, 150)
      }, 50);
  }

}
