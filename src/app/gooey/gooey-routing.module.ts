import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooeyComponent } from './gooey.component';

const routes: Routes = [{ path: '', component: GooeyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooeyRoutingModule { }
