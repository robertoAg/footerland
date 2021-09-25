import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizonRoutingModule } from './horizon-routing.module';
import { HorizonComponent } from './horizon.component';


@NgModule({
  declarations: [
    HorizonComponent
  ],
  imports: [
    CommonModule,
    HorizonRoutingModule
  ]
})
export class HorizonModule { }
