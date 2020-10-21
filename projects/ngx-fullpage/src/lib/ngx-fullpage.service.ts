import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxFullpageService {

  wrapper : ElementRef;
  sectionsNumber : number;

  section : number = 0;

  scrollHeight = 0;


  constructor() { }

  addWrapper(wrapper: ElementRef<any>, section: number) {
    if (this.wrapper) throw new Error('There is already a wrapper defined')
    this.wrapper = wrapper;
    if (section > 0) this.goTo(section);
  }

  scroll(direction: number) {
    this.sectionsNumber = (this.wrapper.nativeElement.scrollHeight / this.wrapper.nativeElement.offsetHeight);
    this.scrollHeight += direction * this.wrapper.nativeElement.offsetHeight;
    this.scrollHeight = this.adjustScroll(this.scrollHeight);
    this.wrapper.nativeElement.scroll({top: this.scrollHeight})
    this.section = this.adjustSection(Math.round(this.scrollHeight / this.wrapper.nativeElement.offsetHeight));
  }

  goNext = () => (this.scroll(1));

  goPrev = () => (this.scroll(-1));

  goTo = (section: number) => (this.scroll(section - this.section));

  goLast() {
    this.sectionsNumber = this.sectionsNumber || (this.wrapper.nativeElement.scrollHeight / this.wrapper.nativeElement.offsetHeight);
    this.goTo(this.sectionsNumber - 1);
  }

  adjustSection = (section : number) => this.setNumberInRange(section, 0, this.sectionsNumber - 1);
  
  adjustScroll(scroll: number) {
    let maxScroll = (this.sectionsNumber - 1) * this.wrapper.nativeElement.offsetHeight;
    return this.setNumberInRange(scroll, 0, maxScroll);
  }
  
  
  private setNumberInRange(n : number, min : number, max : number) {
    return Math.min(Math.max(n, min), max);
  }

}
