import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooeyRoutingModule } from './gooey-routing.module';
import { GooeyComponent } from './gooey.component';


@NgModule({
  declarations: [
    GooeyComponent
  ],
  imports: [
    CommonModule,
    GooeyRoutingModule
  ]
})
export class GooeyModule { }
