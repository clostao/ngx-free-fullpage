import { NgModule } from '@angular/core';

import { NgxFullpageWrapperDirective } from './basic/ngx-fullpage-wrapper.directive';
import { NgxFullpageSectionDirective } from './basic/ngx-fullpage-section.directive';



@NgModule({
  declarations: [NgxFullpageWrapperDirective, NgxFullpageSectionDirective],
  imports: [],
  exports: [NgxFullpageWrapperDirective, NgxFullpageSectionDirective],
})
export class NgxFullpageModule { }
