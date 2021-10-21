import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercitatePage } from './ejercitate.page';

const routes: Routes = [
  {
    path: '',
    component: EjercitatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercitatePageRoutingModule {}
