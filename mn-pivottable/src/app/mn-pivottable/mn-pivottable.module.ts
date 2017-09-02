import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnPivottableComponent } from './mn-pivottable/mn-pivottable.component';
import { SetupDirective } from './mn-pivottable/setup.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MnPivottableComponent, SetupDirective],
  exports:[MnPivottableComponent, SetupDirective]
})
export class MnPivottableModule { }
