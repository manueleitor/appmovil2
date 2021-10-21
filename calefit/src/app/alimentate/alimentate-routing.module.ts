import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentatePage } from './alimentate.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentatePageRoutingModule {}
