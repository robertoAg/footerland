import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gooey', loadChildren: () => import('./gooey/gooey.module').then(m => m.GooeyModule) },
{ path: 'horizon', loadChildren: () => import('./horizon/horizon.module').then(m => m.HorizonModule) },
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
