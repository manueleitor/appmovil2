import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivatePage } from './motivate.page';

const routes: Routes = [
  {
    path: '',
    component: MotivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivatePageRoutingModule {}
