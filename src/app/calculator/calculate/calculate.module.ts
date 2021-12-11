import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate.component';



@NgModule({
  declarations: [
    CalculateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculateComponent
  ]
})
export class CalculateModule { }
