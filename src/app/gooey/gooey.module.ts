import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooeyRoutingModule } from './gooey-routing.module';
import { GooeyComponent } from './gooey.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GooeyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GooeyRoutingModule
  ]
})
export class GooeyModule { }
