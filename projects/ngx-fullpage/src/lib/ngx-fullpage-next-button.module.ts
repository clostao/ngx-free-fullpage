import { NgxFullpageNextButtonDirective } from './next-button/ngx-fullpage-next-button.directive';
import { NgModule } from '@angular/core';
import { NgxFullpagePrevButtonDirective } from './next-button/ngx-fullpage-prev-button.directive';



@NgModule({
  declarations: [NgxFullpageNextButtonDirective, NgxFullpagePrevButtonDirective],
  imports: [],
  exports: [NgxFullpageNextButtonDirective, NgxFullpagePrevButtonDirective],
})
export class NgxFullpageNextButtonModule { }
