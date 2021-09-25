import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizonComponent } from './horizon.component';

const routes: Routes = [{ path: '', component: HorizonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizonRoutingModule { }
